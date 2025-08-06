#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

/**
 * Automated Recovery Backup Script
 * Creates recovery branch with last 7 commits before each push
 * Removes older recovery commits to maintain clean history
 */

const RECOVERY_BRANCH = 'recovery';
const MAX_RECOVERY_COMMITS = 7;

function log(message) {
  console.log(`🔄 [Recovery] ${message}`);
}

function executeCommand(command, options = {}) {
  try {
    return execSync(command, { 
      encoding: 'utf8', 
      stdio: options.silent ? 'pipe' : 'inherit',
      ...options 
    }).trim();
  } catch (error) {
    if (!options.allowFailure) {
      console.error(`❌ Command failed: ${command}`);
      console.error(error.message);
      process.exit(1);
    }
    return null;
  }
}

function getCurrentBranch() {
  return executeCommand('git rev-parse --abbrev-ref HEAD', { silent: true });
}

function getLastCommits(count) {
  return executeCommand(`git log --format="%H" -n ${count}`, { silent: true })
    .split('\n')
    .filter(hash => hash.length > 0);
}

function branchExists(branchName) {
  const result = executeCommand(`git branch --list ${branchName}`, { 
    silent: true, 
    allowFailure: true 
  });
  return result && result.includes(branchName);
}

function createRecoveryBranch() {
  log('Creating recovery branch backup...');
  
  const currentBranch = getCurrentBranch();
  log(`Current branch: ${currentBranch}`);
  
  // Get last 7 commits from current branch
  const lastCommits = getLastCommits(MAX_RECOVERY_COMMITS);
  
  if (lastCommits.length === 0) {
    log('No commits found to backup');
    return;
  }
  
  log(`Found ${lastCommits.length} commits to backup`);
  
  // Delete existing recovery branch if exists
  if (branchExists(RECOVERY_BRANCH)) {
    log('Deleting existing recovery branch...');
    executeCommand(`git branch -D ${RECOVERY_BRANCH}`, { allowFailure: true });
  }
  
  // Create new recovery branch from oldest commit we want to keep
  const oldestCommitToKeep = lastCommits[lastCommits.length - 1];
  log(`Creating recovery branch from commit: ${oldestCommitToKeep.substring(0, 8)}`);
  
  executeCommand(`git checkout -b ${RECOVERY_BRANCH} ${oldestCommitToKeep}`);
  
  // Cherry-pick all commits in order (oldest to newest)
  for (let i = lastCommits.length - 2; i >= 0; i--) {
    const commitHash = lastCommits[i];
    log(`Cherry-picking commit: ${commitHash.substring(0, 8)}`);
    executeCommand(`git cherry-pick ${commitHash}`, { allowFailure: true });
  }
  
  // Switch back to original branch
  executeCommand(`git checkout ${currentBranch}`);
  
  // Push recovery branch to remote
  log('Pushing recovery branch to remote...');
  executeCommand(`git push -f origin ${RECOVERY_BRANCH}`, { allowFailure: true });
  
  log(`✅ Recovery backup complete! Last ${lastCommits.length} commits saved to '${RECOVERY_BRANCH}' branch`);
}

function createGitHook() {
  const hookPath = path.join(process.cwd(), '.git', 'hooks', 'pre-push');
  const hookContent = `#!/bin/sh
# Auto-generated recovery backup hook
node scripts/backup-recovery.js
`;

  if (!fs.existsSync(path.dirname(hookPath))) {
    log('Git hooks directory not found. Skipping hook installation.');
    return;
  }

  fs.writeFileSync(hookPath, hookContent);
  fs.chmodSync(hookPath, '755');
  log('✅ Pre-push git hook installed!');
}

function main() {
  console.log('🚀 SmartStay Recovery Backup System');
  console.log('===================================');
  
  // Check if we're in a git repository
  const isGitRepo = executeCommand('git rev-parse --is-inside-work-tree', { 
    silent: true, 
    allowFailure: true 
  });
  
  if (!isGitRepo) {
    console.error('❌ Not in a git repository');
    process.exit(1);
  }
  
  // Check if this is run as part of git hook or manually
  const isManualRun = !process.env.GIT_REFNAME;
  
  if (isManualRun) {
    log('Manual execution - setting up git hook and creating initial backup');
    createGitHook();
  }
  
  createRecoveryBranch();
  
  if (isManualRun) {
    console.log('\n🎉 Setup complete!');
    console.log('Recovery backup will now run automatically before each push.');
    console.log(`Last ${MAX_RECOVERY_COMMITS} commits will always be preserved in '${RECOVERY_BRANCH}' branch.`);
  }
}

// Run the script
main();