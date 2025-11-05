// "use client";

// import type React from "react";

// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Menu, LogOut, FileText, Video, Settings } from "lucide-react";
// import BlogManagement from "@/components/admin/blog-management";
// import VideoManagement from "@/components/admin/video-management";

// interface AdminDashboardProps {
//   onLogout: () => void;
// }

// export default function AdminDashboard({ onLogout }: AdminDashboardProps) {
//   const [activeTab, setActiveTab] = useState<"blogs" | "videos">("blogs");
//   const [sidebarOpen, setSidebarOpen] = useState(true);
//   const adminEmail =
//     typeof window !== "undefined" ? localStorage.getItem("adminEmail") : "";

//   return (
//     <div className="flex h-screen bg-background">
//       {/* Sidebar */}
//       <aside
//         className={`${
//           sidebarOpen ? "w-64" : "w-20"
//         } flex flex-col border-r border-border/50 bg-card transition-all duration-300`}
//       >
//         <div className="border-b border-border/50 p-6">
//           <div className="flex items-center gap-3">
//             <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary">
//               <span className="font-bold text-primary-foreground">A</span>
//             </div>
//             {sidebarOpen && (
//               <span className="font-bold text-foreground">Admin</span>
//             )}
//           </div>
//         </div>

//         <nav className="flex-1 space-y-2 p-4">
//           <NavItem
//             label="Blog Posts"
//             icon={<FileText className="h-5 w-5" />}
//             active={activeTab === "blogs"}
//             onClick={() => setActiveTab("blogs")}
//             collapsed={!sidebarOpen}
//           />
//           <NavItem
//             label="Videos"
//             icon={<Video className="h-5 w-5" />}
//             active={activeTab === "videos"}
//             onClick={() => setActiveTab("videos")}
//             collapsed={!sidebarOpen}
//           />
//           <NavItem
//             label="Settings"
//             icon={<Settings className="h-5 w-5" />}
//             active={false}
//             onClick={() => {}}
//             collapsed={!sidebarOpen}
//           />
//         </nav>

//         <div className="border-t border-border/50 p-4">
//           <Button
//             variant="ghost"
//             size="sm"
//             onClick={onLogout}
//             className="w-full justify-start gap-2 text-destructive hover:bg-destructive/10"
//           >
//             <LogOut className="h-4 w-4" />
//             {sidebarOpen && "Logout"}
//           </Button>
//         </div>
//       </aside>

//       {/* Main Content */}
//       <div className="flex flex-1 flex-col overflow-hidden">
//         {/* Header */}
//         <header className="flex items-center justify-between border-b border-border/50 bg-card px-6 py-4">
//           <div className="flex items-center gap-4">
//             <Button
//               variant="ghost"
//               size="icon"
//               onClick={() => setSidebarOpen(!sidebarOpen)}
//               className="text-foreground"
//             >
//               <Menu className="h-5 w-5" />
//             </Button>
//             <div>
//               <h1 className="text-2xl font-bold text-foreground">
//                 {activeTab === "blogs" ? "Blog Posts" : "Videos"}
//               </h1>
//               <p className="mt-1 text-sm text-muted-foreground">
//                 Manage and organize your content
//               </p>
//             </div>
//           </div>
//           <div className="text-sm text-muted-foreground">{adminEmail}</div>
//         </header>

//         {/* Content Area */}
//         <main className="flex-1 overflow-auto">
//           {activeTab === "blogs" && (
//             <>
//               <div className="p-6">
//                 <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-3">
//                   <StatsCard
//                     title="Total Posts"
//                     value="24"
//                     description="Blog posts published"
//                   />
//                   <StatsCard
//                     title="Drafts"
//                     value="3"
//                     description="Posts in progress"
//                   />
//                   <StatsCard
//                     title="Published This Month"
//                     value="8"
//                     description="New content"
//                   />
//                 </div>
//               </div>
//               <div className="px-6 pb-6">
//                 <BlogManagement />
//               </div>
//             </>
//           )}
//           {activeTab === "videos" && (
//             <>
//               <div className="p-6">
//                 <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-3">
//                   <StatsCard
//                     title="Total Videos"
//                     value="18"
//                     description="Videos uploaded"
//                   />
//                   <StatsCard
//                     title="Total Views"
//                     value="2.4K"
//                     description="Across all videos"
//                   />
//                   <StatsCard
//                     title="Average Duration"
//                     value="4m 32s"
//                     description="Per video"
//                   />
//                 </div>
//               </div>
//               <div className="px-6 pb-6">
//                 <VideoManagement />
//               </div>
//             </>
//           )}
//         </main>
//       </div>
//     </div>
//   );
// }

// interface NavItemProps {
//   label: string;
//   icon: React.ReactNode;
//   active: boolean;
//   onClick: () => void;
//   collapsed: boolean;
// }

// function NavItem({ label, icon, active, onClick, collapsed }: NavItemProps) {
//   return (
//     <button
//       onClick={onClick}
//       className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 transition-colors ${
//         active
//           ? "bg-primary/20 text-primary"
//           : "text-muted-foreground hover:bg-secondary/50"
//       }`}
//     >
//       <div className="flex h-5 w-5 shrink-0 items-center justify-center">
//         {icon}
//       </div>
//       {!collapsed && <span className="text-sm font-medium">{label}</span>}
//     </button>
//   );
// }

// interface StatsCardProps {
//   title: string;
//   value: string;
//   description: string;
// }

// function StatsCard({ title, value, description }: StatsCardProps) {
//   return (
//     <Card className="border-border/50">
//       <CardHeader className="pb-3">
//         <CardTitle className="text-sm font-medium text-muted-foreground">
//           {title}
//         </CardTitle>
//       </CardHeader>
//       <CardContent>
//         <div className="mb-1 text-3xl font-bold text-foreground">{value}</div>
//         <p className="text-xs text-muted-foreground">{description}</p>
//       </CardContent>
//     </Card>
//   );
// }
