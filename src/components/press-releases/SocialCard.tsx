"use client";
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Facebook, Link as LinkIcon, Share2 } from 'lucide-react';
import { BsLinkedin, BsTwitterX } from 'react-icons/bs';
import {Button} from '../ui/Button'; // ← assuming this is your custom Button
import { StorySocialLinks } from '@/types/press-realease/story';

interface SocialCardProps {
  socialLinks?: StorySocialLinks[];   // ← optional + array
}

const SocialCard = ({ socialLinks = [] }: SocialCardProps) => {
  const [copied, setCopied] = useState(false);

  // You can make this dynamic later (e.g. from window.location or prop)
  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch (err) {
      console.error('Failed to copy link', err);
    }
  };

  return (
    <Card className=" border-gray-100 shadow-lg">
      <CardHeader className="flex flex-row items-center space-x-2 p-4 border-b">
        <Share2 className="h-5 w-5 text-green-950" />
        <CardTitle className="text-lg">Share This Article</CardTitle>
      </CardHeader>
      <CardContent className="px-4 pb-6">
        <div className="grid grid-cols-2 gap-3">
          {socialLinks.map((link) => {
            const platform = link.socialPlatform.toLowerCase();
            const isCopyLink = platform === 'copylink' || platform === 'copy link';

            if (isCopyLink) {
              return (
                <Button
                  key={platform}
                  variant="default"
                  size="default"
                  className="border h-10 flex flex-col items-center justify-center rounded-md transition-colors hover:bg-gray-800/50"
                  onClick={handleCopyLink}
                >
                  <LinkIcon className="h-5 w-5 mb-1" />
                  <p className="text-xs font-medium">
                    {copied ? 'Copied!' : 'Copy'}
                  </p>
                </Button>
              );
            }
            return (
              <a
                key={platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="border h-10 flex flex-row space-x-1.5 items-center justify-center rounded-md transition-colors hover:bg-gray-800/50"
              >
                {platform === 'facebook' && <Facebook className="h-5 w-5 " />}
                {platform === 'twitter' && <BsTwitterX className="h-5 w-5 " />}
                {platform === 'linkedin' && <BsLinkedin className="h-5 w-5" />}
                <p className="text-xs font-medium capitalize">{platform}</p>
              </a>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default SocialCard;