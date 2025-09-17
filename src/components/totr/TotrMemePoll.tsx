'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { useState } from 'react';

interface PollOption {
  id: string;
  text: string;
  emoji: string;
  votes: number;
}

const initialOptions: PollOption[] = [
  { id: 'totr', text: 'TOTR (Тотя ❤️)', emoji: '🧽', votes: 127 },
  { id: 'py', text: 'ПЫ Minion', emoji: '🍌', votes: 89 },
  { id: 'both', text: 'Both are iconic', emoji: '🔥', votes: 156 },
  { id: 'neither', text: 'Neither appeals to me', emoji: '🤷', votes: 23 },
];

export function TotrMemePoll() {
  const [options, setOptions] = useState<PollOption[]>(initialOptions);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [hasVoted, setHasVoted] = useState(false);

  const totalVotes = options.reduce((sum, option) => sum + option.votes, 0);

  const handleVote = (optionId: string) => {
    if (hasVoted) return;

    setOptions((prev) =>
      prev.map((option) =>
        option.id === optionId ? { ...option, votes: option.votes + 1 } : option
      )
    );
    setSelectedOption(optionId);
    setHasVoted(true);
  };

  const resetVote = () => {
    setOptions(initialOptions);
    setSelectedOption(null);
    setHasVoted(false);
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-center">
          🗳️ TOTR vs ПЫ: Community Vote
        </CardTitle>
        <p className="text-sm text-muted-foreground text-center">
          Which Russian brainrot meme reigns supreme?
        </p>
      </CardHeader>
      <CardContent className="space-y-3">
        {options.map((option) => {
          const percentage =
            totalVotes > 0 ? Math.round((option.votes / totalVotes) * 100) : 0;
          const isSelected = selectedOption === option.id;

          return (
            <div key={option.id} className="space-y-2">
              <Button
                variant={isSelected ? 'default' : 'outline'}
                className="w-full h-auto p-3 justify-between"
                onClick={() => handleVote(option.id)}
                disabled={hasVoted}
              >
                <div className="flex items-center gap-2">
                  <span className="text-lg">{option.emoji}</span>
                  <span className="text-left">{option.text}</span>
                </div>
                {hasVoted && (
                  <span className="text-sm font-mono">
                    {option.votes} ({percentage}%)
                  </span>
                )}
              </Button>

              {hasVoted && (
                <div className="px-1">
                  <Progress value={percentage} className="h-2" />
                </div>
              )}
            </div>
          );
        })}

        <div className="pt-3 border-t">
          <div className="flex justify-between items-center text-sm text-muted-foreground">
            <span>Total votes: {totalVotes}</span>
            {hasVoted && (
              <Button
                variant="ghost"
                size="sm"
                onClick={resetVote}
                className="h-auto p-1 text-xs"
              >
                Reset
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
