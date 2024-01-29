"use client";

import { useTransition } from "react";
import { onFollow, onUnfollow } from "@/actions/follow";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface ActionsProps {
  isFollowing: boolean;
  userId: string;
}

export const Actions = ({ isFollowing, userId }: ActionsProps) => {
  const [isPending, startTransition] = useTransition();
  const handleFollow = () => {
    onFollow(userId)
      .then((data) =>
        toast.success(`You are now following ${data.following.username}`)
      )
      .catch(() => toast.error("Something went wrong"));
  };
  const handleUnfollow = () => {
    onUnfollow(userId)
      .then((data) =>
        toast.success(`You have unfollowed ${data.following.username}`)
      )
      .catch(() => toast.error("Something went wrong"));
  };

  const onClick = () => {
    if (isFollowing) {
      handleUnfollow();
    } else {
      handleFollow();
    }
  };

  return (
    <Button disabled={isPending} variant="primary" onClick={onClick}>
      {isFollowing ? "Unfollow" : "Follow"}
    </Button>
  );
};
