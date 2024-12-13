'use client'

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Eye, Heart, Share2, Sparkles } from 'lucide-react'
import { useTranslation } from "next-i18next"

export default function UniqueContentSection() {
  const { t } = useTranslation()

  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-gradient-to-b from-gray-50 to-white rounded-xl">
      <div className="mb-8">
        <Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-100">
          <Sparkles className="w-4 h-4 mr-1" />
          Unique content
        </Badge>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Generated Image Section */}
        <Card className="overflow-hidden">
          <CardContent className="p-0">
            <div className="relative">
              <img
                src="https://i.imgur.com/XBb11Pt.png"
                alt={t("features.content.imageAlt")}
                className="w-full h-48 object-cover"
              />
              <div className="absolute bottom-3 right-3 bg-black/70 px-2 py-1 rounded-md text-white text-sm">
                {t("features.content.imageLabel")}
              </div>
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Heart className="w-4 h-4" />
                  <span>1.2k</span>
                </div>
                <div className="flex items-center gap-2">
                  <Share2 className="w-4 h-4" />
                  <span>234</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Generated Text Section */}
        <Card>
          <CardContent className="p-4">
            <div className="mb-3">
              <Badge variant="outline">{t("features.content.textLabel")}</Badge>
            </div>
            <ScrollArea className="h-48">
              <p className="text-gray-800">{t("features.content.generatedText")}</p>
              <div className="mt-4 flex items-center gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <Heart className="w-4 h-4" />
                  <span>892</span>
                </div>
                <div className="flex items-center gap-1">
                  <Share2 className="w-4 h-4" />
                  <span>156</span>
                </div>
              </div>
            </ScrollArea>
          </CardContent>
        </Card>

        {/* Video Thumbnail Section */}
        <Card>
          <CardContent className="p-0">
            <div className="relative">
              <video
                src="https://storage.cdn-luma.com/dream-machine/1c0236b3-eded-447c-9e88-f1ec29234e3b/c77e6454-4f5c-4e91-8981-8d236faf0e70/watermarked_video01f21b8fe25de44ef9e09e0a6457bd479.mp4"
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center">
                  <div className="w-4 h-4 bg-gray-800 rounded-sm" />
                </div>
              </div>
              <div className="absolute bottom-3 right-3 bg-black/70 px-2 py-1 rounded-md text-white text-sm flex items-center gap-1">
                <Eye className="w-4 h-4" />
                <span>2.4k</span>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-medium mb-1">{t("features.content.videoTitle")}</h3>
              <p className="text-sm text-gray-600">{t("features.content.videoDescription")}</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
