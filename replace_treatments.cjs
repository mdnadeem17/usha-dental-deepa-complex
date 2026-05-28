const fs = require('fs');

const filePath = '/Users/mohammednadeem/Downloads/usha-dental-deepa-complex-main/src/routes/index.tsx';
const content = fs.readFileSync(filePath, 'utf8');

const startMarker = "              {/* Luxury Tabs Selector */}";
const endMarker = "                    {/* Secondary Tray: Floating Glassmorphism Pills (Only visible in 'All' tab) */}";

const startIdx = content.indexOf(startMarker);
const endIdx = content.indexOf(endMarker);

if (startIdx === -1 || endIdx === -1) {
    console.error("Markers not found!");
    process.exit(1);
}

const replacement = `              {/* Luxury Tabs Selector (Apple Segmented Control Style) */}
              <div className="inline-flex bg-gray-100/80 p-1.5 rounded-full relative z-30 shadow-inner">
                {["All", "Aesthetic", "Restorative", "Preventative"].map((tab) => {
                  const label = tab === "Preventative" ? "Preventative & Special" : tab;
                  const isActive = activeTab === tab;
                  return (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={\`relative px-5 py-2.5 rounded-full text-[13px] font-semibold tracking-tight transition-all duration-300 cursor-pointer \${
                        isActive ? "text-gray-900" : "text-gray-500 hover:text-gray-700"
                      }\`}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="activeTabSegment"
                          className="absolute inset-0 bg-white rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.06)] border border-gray-200/50 -z-10"
                          transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        />
                      )}
                      <span className="relative z-10">{label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Bento Grid layout builder */}
              {(() => {
                const filtered = expertise.filter((item) => {
                  if (activeTab === "All") return true;
                  if (activeTab === "Aesthetic") return item.tag === "Aesthetic";
                  if (activeTab === "Restorative") return item.tag === "Restorative";
                  if (activeTab === "Preventative") return item.tag === "Preventative" || item.tag === "Specialised";
                  return true;
                });

                let gridItems = [];
                let pillItems = [];

                if (activeTab === "All") {
                  const curatedNames = [
                    "Dental Implants", 
                    "Invisible Aligners", 
                    "Root Canal Treatment", 
                    "Teeth Whitening"
                  ];
                  gridItems = filtered.filter(item => curatedNames.includes(item.name));
                  pillItems = filtered.filter(item => !curatedNames.includes(item.name));
                } else {
                  gridItems = [...filtered];
                  pillItems = [];
                }

                gridItems.sort((a, b) => (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0));

                return (
                  <div className="space-y-12">
                    <motion.div
                      layout
                      className="grid gap-6 grid-cols-1 md:grid-cols-2 relative z-10"
                    >
                      <AnimatePresence mode="popLayout">
                        {gridItems.map((item, index) => {
                          const Icon = item.icon;
                          const isFeaturedLayout = index === 0 && item.isFeatured && activeTab === "All";

                          return (
                            <motion.div
                              layout
                              key={item.name}
                              initial={{ opacity: 0, scale: 0.96, y: 20 }}
                              animate={{ opacity: 1, scale: 1, y: 0 }}
                              exit={{ opacity: 0, scale: 0.96, y: 20 }}
                              transition={{ duration: 0.4, ease: "easeOut" }}
                              className={\`group relative rounded-[2rem] p-6 md:p-8 flex flex-col justify-between overflow-hidden cursor-pointer transition-all duration-300 border backdrop-blur-xl \${
                                isFeaturedLayout ? "md:col-span-2" : "md:col-span-1"
                              } \${
                                item.isFeatured
                                  ? "bg-white/80 border-primary/20 shadow-[0_8px_30px_rgba(142,68,173,0.06)] hover:shadow-[0_12px_40px_rgba(142,68,173,0.12)]"
                                  : "bg-white/50 border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:bg-white/70"
                              }\`}
                            >
                              {/* Background hover effect */}
                              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                              {item.isFeatured && (
                                <div className="absolute top-6 right-6 z-20">
                                  <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-primary/10 text-primary border border-primary/20">
                                    Signature Service
                                  </span>
                                </div>
                              )}

                              <div className={\`relative z-10 flex \${isFeaturedLayout ? "flex-col md:flex-row md:items-center gap-6 md:gap-10" : "flex-col gap-6"}\`}>
                                <div className={\`flex shrink-0 items-center justify-center rounded-2xl shadow-sm transition-transform duration-500 group-hover:scale-110 \${
                                  item.isFeatured ? "h-16 w-16 bg-gradient-to-br from-[#4B1248] to-[#8E44AD] text-white" : "h-14 w-14 bg-primary/5 text-primary border border-primary/10"
                                }\`}>
                                  <Icon className={item.isFeatured ? "h-7 w-7" : "h-6 w-6"} />
                                </div>

                                <div className={\`space-y-3 flex-1 \${isFeaturedLayout ? "md:pr-24" : "pr-6"}\`}>
                                  <div>
                                    <h3 className={\`font-display font-bold tracking-tight text-foreground transition-colors group-hover:text-primary \${
                                      isFeaturedLayout ? "text-2xl md:text-3xl" : "text-xl"
                                    }\`}>
                                      {item.name}
                                    </h3>
                                  </div>
                                  <p className={\`text-[#6B7280] font-medium leading-relaxed \${
                                    isFeaturedLayout ? "text-[15px] md:max-w-[400px]" : "text-[13px]"
                                  }\`}>
                                    {item.description}
                                  </p>
                                </div>
                              </div>

                              <div className="mt-8 flex items-center justify-between border-t border-gray-100/50 pt-4 relative z-10">
                                <span className="text-[10px] uppercase font-bold tracking-widest text-primary/60">
                                  {item.tag}
                                </span>
                                <div className="flex items-center justify-center h-8 w-8 rounded-full bg-white shadow-sm text-gray-400 group-hover:text-primary group-hover:bg-primary/5 transition-all duration-300 border border-gray-100">
                                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </div>
                              </div>
                            </motion.div>
                          );
                        })}
                      </AnimatePresence>
                    </motion.div>

`;

const newContent = content.substring(0, startIdx) + replacement + content.substring(endIdx);
fs.writeFileSync(filePath, newContent);
console.log("Replacement successful!");
