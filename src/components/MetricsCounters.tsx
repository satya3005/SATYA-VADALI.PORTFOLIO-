import React, { useEffect, useState, useRef } from 'react';
import { METRICS } from '../data/portfolioData';
import { Award, Zap, Layers, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';

interface AnimatedCounterProps {
  end: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  end,
  decimals = 0,
  prefix = '',
  suffix = '',
  duration = 1800,
}) => {
  const [count, setCount] = useState<number>(0);
  const countRef = useRef<HTMLSpanElement>(null);
  const [hasStarted, setHasStarted] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.2 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // easeOutExpo easing curve
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = easeProgress * end;
      setCount(current);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [hasStarted, end, duration]);

  const formatted = decimals > 0 ? count.toFixed(decimals) : Math.floor(count);

  return (
    <span ref={countRef}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
};

export const MetricsCounters: React.FC = () => {
  const icons = [
    <Award className="w-5 h-5 text-[#00f2fe]" key="award" />,
    <Zap className="w-5 h-5 text-[#ff9900]" key="zap" />,
    <Layers className="w-5 h-5 text-[#00f2fe]" key="layers" />,
    <TrendingUp className="w-5 h-5 text-[#ff9900]" key="trend" />,
  ];

  return (
    <section id="metrics" className="py-12 relative">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section kicker */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between mb-8 pb-4 border-b border-white/10"
        >
          <div>
            <span className="text-xs uppercase tracking-widest text-[#00f2fe] font-semibold flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5" />
              Performance Indicators & Creative Reach
            </span>
            <h2 className="font-['Space_Grotesk'] text-xl sm:text-2xl font-bold text-white tracking-tight mt-1">
              Measurable Design & AI Impact
            </h2>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-xs text-[#9ba1b0]">
            <span>Visakhapatnam & Global Workflows</span>
            <span>·</span>
            <span className="text-[#ff9900]">Live Verified Metrics</span>
          </div>
        </motion.div>

        {/* 4 Glass Cards in a Responsive Row with Staggered Entrance */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {METRICS.map((metric, idx) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="card-shine group relative p-6 rounded-xl bg-[#12141c]/65 backdrop-blur-md border border-white/[0.08] hover:border-white/20 transition-all duration-300"
            >
              {/* Subtle top edge gradient line on hover */}
              <div 
                className={`absolute top-0 inset-x-0 h-[2px] rounded-t-xl transition-opacity duration-300 opacity-0 group-hover:opacity-100 ${
                  idx % 2 === 0
                    ? 'bg-gradient-to-r from-transparent via-[#00f2fe] to-transparent'
                    : 'bg-gradient-to-r from-transparent via-[#ff9900] to-transparent'
                }`}
                aria-hidden="true"
              />

              {/* Icon & Counter Type */}
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {icons[idx]}
                </div>
                <span className="text-[11px] font-mono text-[#9ba1b0] uppercase tracking-wider">
                  0{idx + 1}
                </span>
              </div>

              {/* Kinetic Big Number with Live Count-Up */}
              <div className="font-['Space_Grotesk'] text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-2 font-mono tabular-nums">
                <span className={idx % 2 === 0 ? 'text-[#00f2fe]' : 'text-[#ff9900]'}>
                  {idx === 0 && <AnimatedCounter end={3} suffix="+ Years" />}
                  {idx === 1 && <AnimatedCounter end={500} suffix="+" />}
                  {idx === 2 && <AnimatedCounter end={150} suffix="+" />}
                  {idx === 3 && <AnimatedCounter end={1.2} decimals={1} suffix="M+" />}
                </span>
              </div>

              {/* Metric Label */}
              <h3 className="font-['Space_Grotesk'] text-sm sm:text-base font-semibold text-white group-hover:text-white/90 transition-colors mb-1">
                {metric.label}
              </h3>

              {/* Supporting Subtext */}
              <p className="text-xs text-[#9ba1b0] leading-relaxed">
                {metric.subtext}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
