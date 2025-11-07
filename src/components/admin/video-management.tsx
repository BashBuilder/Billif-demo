"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Trash2, Edit2, Plus, Search, Eye, Calendar, Play } from "lucide-react";

interface Video {
  id: string;
  title: string;
  url: string;
  description: string;
  createdAt: string;
  duration: string;
  views: number;
}

export default function VideoManagement() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [isAddingNew, setIsAddingNew] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    url: "",
    description: "",
    duration: "0:00",
  });

  // Load from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("videos");
    if (stored) {
      setVideos(JSON.parse(stored));
    } else {
      const sampleVideos: Video[] = [
        {
          id: "1",
          title: "Next.js Tutorial",
          url: "https://youtube.com/watch?v=example1",
          description: "Complete guide to Next.js 14 and App Router",
          createdAt: new Date(
            Date.now() - 14 * 24 * 60 * 60 * 1000,
          ).toISOString(),
          duration: "45:30",
          views: 892,
        },
        {
          id: "2",
          title: "React Hooks Deep Dive",
          url: "https://youtube.com/watch?v=example2",
          description: "Understanding React Hooks and custom hooks",
          createdAt: new Date(
            Date.now() - 7 * 24 * 60 * 60 * 1000,
          ).toISOString(),
          duration: "38:15",
          views: 654,
        },
        {
          id: "3",
          title: "TypeScript for Beginners",
          url: "https://youtube.com/watch?v=example3",
          description: "Getting started with TypeScript in 2024",
          createdAt: new Date(
            Date.now() - 2 * 24 * 60 * 60 * 1000,
          ).toISOString(),
          duration: "52:00",
          views: 234,
        },
      ];
      setVideos(sampleVideos);
      localStorage.setItem("videos", JSON.stringify(sampleVideos));
    }
  }, []);

  const filteredVideos = videos.filter(
    (video) =>
      video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      video.description.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const handleAddNew = () => {
    setFormData({ title: "", url: "", description: "", duration: "0:00" });
    setEditingId(null);
    setIsAddingNew(true);
  };

  const handleSave = () => {
    if (
      !formData.title ||
      !formData.url ||
      !formData.description ||
      !formData.duration
    ) {
      alert("Please fill all fields");
      return;
    }

    if (editingId) {
      const updated = videos.map((video) =>
        video.id === editingId
          ? {
              ...video,
              title: formData.title,
              url: formData.url,
              description: formData.description,
              duration: formData.duration,
            }
          : video,
      );
      setVideos(updated);
      localStorage.setItem("videos", JSON.stringify(updated));
    } else {
      const newVideo: Video = {
        id: Date.now().toString(),
        title: formData.title,
        url: formData.url,
        description: formData.description,
        duration: formData.duration,
        createdAt: new Date().toISOString(),
        views: 0,
      };
      const updated = [...videos, newVideo];
      setVideos(updated);
      localStorage.setItem("videos", JSON.stringify(updated));
    }
    setIsAddingNew(false);
    setFormData({ title: "", url: "", description: "", duration: "0:00" });
  };

  const handleEdit = (video: Video) => {
    setFormData({
      title: video.title,
      url: video.url,
      description: video.description,
      duration: video.duration,
    });
    setEditingId(video.id);
    setIsAddingNew(true);
  };

  const handleDelete = (id: string) => {
    const updated = videos.filter((video) => video.id !== id);
    setVideos(updated);
    localStorage.setItem("videos", JSON.stringify(updated));
  };

  const handleCancel = () => {
    setIsAddingNew(false);
    setFormData({ title: "", url: "", description: "", duration: "0:00" });
  };

  const getThumbnailUrl = (url: string) => {
    try {
      const videoId = url.split("v=")[1]?.split("&")[0];
      return videoId
        ? `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`
        : null;
    } catch {
      return null;
    }
  };

  const totalViews = videos.reduce((sum, video) => sum + video.views, 0);
  const totalDuration = videos.length;

  return (
    <div className="space-y-6">
      {/* Stats Overview */}
      <div className="grid grid-cols-2 gap-4">
        <Card className="border-border/50">
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="mb-1 text-2xl font-bold text-primary">
                {totalViews}
              </div>
              <p className="text-xs text-muted-foreground">Total Views</p>
            </div>
          </CardContent>
        </Card>
        <Card className="border-border/50">
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="mb-1 text-2xl font-bold text-muted-foreground">
                {totalDuration}
              </div>
              <p className="text-xs text-muted-foreground">Videos</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Header with Search and Add Button */}
      <div className="flex items-center justify-between gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-muted-foreground" />
          <Input
            placeholder="Search videos by title or description..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border-border/50 bg-background pl-9 text-foreground"
          />
        </div>
        <Button
          onClick={handleAddNew}
          className="gap-2 whitespace-nowrap bg-primary text-primary-foreground hover:bg-primary/90"
        >
          <Plus className="h-4 w-4" />
          New Video
        </Button>
      </div>

      {/* Add/Edit Form */}
      {isAddingNew && (
        <Card className="border-border/50 bg-secondary/30">
          <CardHeader>
            <CardTitle>{editingId ? "Edit Video" : "Add New Video"}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label className="text-foreground">Title</Label>
              <Input
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
                className="mt-1 border-border/50 bg-background text-foreground"
                placeholder="Video title"
              />
            </div>
            <div>
              <Label className="text-foreground">Video URL</Label>
              <Input
                value={formData.url}
                onChange={(e) =>
                  setFormData({ ...formData, url: e.target.value })
                }
                className="mt-1 border-border/50 bg-background text-foreground"
                placeholder="https://youtube.com/watch?v=..."
              />
            </div>
            <div>
              <Label className="text-foreground">Description</Label>
              <Input
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                className="mt-1 border-border/50 bg-background text-foreground"
                placeholder="Video description"
              />
            </div>
            <div>
              <Label className="text-foreground">Duration</Label>
              <Input
                value={formData.duration}
                onChange={(e) =>
                  setFormData({ ...formData, duration: e.target.value })
                }
                className="mt-1 border-border/50 bg-background text-foreground"
                placeholder="mm:ss (e.g., 45:30)"
              />
            </div>
            <div className="flex justify-end gap-2 pt-2">
              <Button variant="outline" onClick={handleCancel}>
                Cancel
              </Button>
              <Button
                onClick={handleSave}
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Save
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Videos Grid */}
      <div className="grid gap-4">
        {filteredVideos.length === 0 ? (
          <Card className="border-border/50">
            <CardContent className="pt-6 text-center text-muted-foreground">
              {searchQuery
                ? "No videos match your search"
                : "No videos yet. Add your first one!"}
            </CardContent>
          </Card>
        ) : (
          filteredVideos.map((video) => (
            <Card
              key={video.id}
              className="overflow-hidden border-border/50 transition-all hover:shadow-md"
            >
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="group relative flex h-20 w-32 flex-shrink-0 items-center justify-center overflow-hidden rounded-lg border border-border/50 bg-secondary/30">
                    {getThumbnailUrl(video.url) ? (
                      <>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={getThumbnailUrl(video.url) || ""}
                          alt={video.title}
                          className="h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-colors group-hover:bg-black/60 group-hover:opacity-100">
                          <Play className="h-6 w-6 fill-white text-white" />
                        </div>
                      </>
                    ) : (
                      <div className="flex flex-col items-center justify-center text-muted-foreground">
                        <Play className="mb-1 h-5 w-5" />
                        <span className="text-xs">No thumbnail</span>
                      </div>
                    )}
                    <div className="absolute bottom-1 right-1 rounded bg-black/70 px-1.5 py-0.5 text-xs text-white">
                      {video.duration}
                    </div>
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="truncate text-lg font-semibold text-foreground">
                      {video.title}
                    </h3>
                    <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
                      {video.description}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Eye className="h-3 w-3" />
                        {video.views} views
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {new Date(video.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                  </div>

                  <div className="ml-4 flex flex-shrink-0 gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleEdit(video)}
                      className="text-primary hover:bg-primary/10"
                    >
                      <Edit2 className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleDelete(video.id)}
                      className="text-destructive hover:bg-destructive/10"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}
