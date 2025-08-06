export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Clean Professional Background */}
      <div className="absolute inset-0">
        {/* Primary elegant gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-gray-900"></div>
        
        {/* Subtle brand accent - single static glow */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-violet-600/8 to-blue-600/8 rounded-full blur-3xl"></div>
        
        {/* Minimal texture overlay */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }}></div>
        
        {/* Bottom fade for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center pt-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            
            {/* Left Content */}
            <div className="space-y-12">
              {/* Title */}
              <div className="space-y-8">
                <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black text-white tracking-tight leading-[0.9]">
                  Smart<span 
                    style={{
                      background: 'linear-gradient(135deg, #A78BFA 0%, #60A5FA 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}
                  >x</span>Stay
                </h1>
                
                {/* Value Proposition */}
                <div className="space-y-6">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl text-gray-200 font-bold leading-tight">
                    Transform Guest Experience with 
                    <span className="text-violet-400"> Digital Innovation</span>
                  </h2>
                  
                  <p className="text-lg sm:text-xl text-gray-400 leading-relaxed max-w-2xl">
                    Stop endless guest questions. Create seamless digital guides with house rules, 
                    local recommendations, and instant support.
                  </p>
                </div>
              </div>

              {/* CTA Section */}
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row gap-4">
                  {/* Primary CTA */}
                  <button 
                    className="group relative inline-flex items-center justify-center px-10 py-5 text-xl font-bold text-white rounded-2xl shadow-2xl hover:shadow-violet-500/25 transition-all duration-300 ease-out overflow-hidden transform hover:scale-105"
                    style={{background: 'var(--gradient-primary)'}}
                  >
                    {/* Enhanced fill animation */}
                    <div className="absolute inset-0 bg-gradient-to-r from-violet-400 to-blue-400 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
                    
                    <span className="relative z-10 tracking-wide flex items-center space-x-2">
                      <span>SCHEDULE CALL</span>
                      <span className="text-2xl group-hover:translate-x-1 transition-transform duration-300">→</span>
                    </span>
                  </button>

                  {/* Secondary CTA */}
                  <button className="inline-flex items-center justify-center px-8 py-5 text-lg font-semibold text-violet-300 border-2 border-violet-400/30 rounded-2xl hover:bg-violet-400/10 hover:border-violet-400/50 transition-all duration-300">
                    <span className="flex items-center space-x-2">
                      <span>▶</span>
                      <span>Watch 2min Demo</span>
                    </span>
                  </button>
                </div>


              </div>
            </div>

            {/* Right Content - 3D iPhone Model */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="relative w-full h-[600px]">
                {/* Background glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 to-blue-500/10 blur-3xl rounded-full"></div>
                
                {/* Spline 3D iPhone */}
                <iframe 
                  src="https://my.spline.design/iphoneprocopy-R0IJdgxrF9sgMnOGYoUOwmPE/"
                  width="100%" 
                  height="100%"
                  className="relative z-10 rounded-2xl bg-transparent"
                  frameBorder="0"
                  title="3D iPhone SmartStay Demo"
                  style={{ background: 'transparent' }}
                  allowTransparency={true}
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}