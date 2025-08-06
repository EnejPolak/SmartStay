# 🔄 SmartStay Recovery Backup System

Automated backup system that preserves your last 7 commits in a dedicated `recovery` branch before each push.

## 🚀 Quick Setup

```bash
# Install the recovery system
npm run setup-recovery
```

This will:
- ✅ Create a git pre-push hook
- ✅ Create initial `recovery` branch backup
- ✅ Setup automatic backups before each push

## 📋 How It Works

### Automatic Backup (Recommended)
Every time you push to any branch:
```bash
git push origin main
```

The system automatically:
1. 🔍 Gets your last 7 commits
2. 📦 Creates/updates `recovery` branch
3. 🗑️ Removes commits older than 7
4. ⬆️ Pushes backup to remote
5. ✅ Continues with your normal push

### Manual Backup
```bash
# Create backup manually anytime
npm run backup
```

## 🌳 Branch Structure

```
main branch:     A - B - C - D - E - F - G - H - I - J
                                   ↓
recovery branch:               D - E - F - G - H - I - J
                               ↑                       ↑
                         oldest kept              newest
```

## 🛡️ Recovery Scenarios

### Accidentally deleted commits
```bash
# Switch to recovery branch
git checkout recovery

# See your backed up commits
git log --oneline

# Cherry-pick specific commits back
git checkout main
git cherry-pick <commit-hash>
```

### Lost work after force push
```bash
# Restore from recovery
git checkout recovery
git checkout -b restore-branch
git push origin restore-branch
```

### Merge conflicts destroyed work
```bash
# Compare with recovery
git diff main recovery

# See what was lost
git log recovery --not main
```

## ⚙️ Configuration

Edit `scripts/backup-recovery.js` to customize:

```javascript
const RECOVERY_BRANCH = 'recovery';     // Change branch name
const MAX_RECOVERY_COMMITS = 7;         // Change number of commits to keep
```

## 🔧 Troubleshooting

### Disable automatic backup temporarily
```bash
# Remove git hook
rm .git/hooks/pre-push
```

### Re-enable automatic backup
```bash
npm run setup-recovery
```

### Check if system is working
```bash
# Look for the hook file
ls -la .git/hooks/pre-push

# Test manual backup
npm run backup
```

## 📊 Benefits

- 🛡️ **Safety Net**: Never lose your last 7 commits
- 🤖 **Automatic**: Works transparently with your git workflow  
- 🧹 **Clean**: Maintains only recent history, no bloat
- ⚡ **Fast**: Minimal overhead on your push operations
- 🔄 **Recoverable**: Easy to restore any recent work

---

**Note**: This system backs up commits, not uncommitted changes. Always commit your work before relying on recovery backup!