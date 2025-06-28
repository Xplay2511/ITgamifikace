import React from 'react';
import { Student } from '../types';

interface LeaderboardProps {
  students: Student[];
  currentUser: string;
}

const Leaderboard: React.FC<LeaderboardProps> = ({ students, currentUser }) => {
  const sortedStudents = [...students].sort((a, b) => b.xp - a.xp);

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b-2 border-arcade-neon-green">
            <th className="text-left p-2 text-xs font-arcade text-arcade-purple">Pozice</th>
            <th className="text-left p-2 text-xs font-arcade text-arcade-purple">Jméno</th>
            <th className="text-left p-2 text-xs font-arcade text-arcade-purple">XP</th>
            <th className="text-left p-2 text-xs font-arcade text-arcade-purple">Odznaky</th>
            <th className="text-left p-2 text-xs font-arcade text-arcade-purple">Snake</th>
            <th className="text-left p-2 text-xs font-arcade text-arcade-purple">Space</th>
            <th className="text-left p-2 text-xs font-arcade text-arcade-purple">Výzvy</th>
            <th className="text-left p-2 text-xs font-arcade text-arcade-purple">Hvězdy</th>
          </tr>
        </thead>
        <tbody>
          {sortedStudents.map((student, index) => (
            <tr
              key={student.id}
              className={`border-b border-arcade-light-gray ${
                student.name === currentUser ? 'bg-arcade-yellow bg-opacity-20' : ''
              }`}
            >
              <td className="p-2">
                <div className="flex items-center">
                  {index === 0 && <span className="text-lg mr-1">👑</span>}
                  <span className="text-xs font-arcade text-arcade-dark">
                    #{index + 1}
                  </span>
                </div>
              </td>
              <td className="p-2">
                <span className="text-xs font-arcade text-arcade-dark">
                  {student.name}
                  {student.name === currentUser && ' (Ty)'}
                </span>
              </td>
              <td className="p-2">
                <span className="text-xs font-arcade text-arcade-yellow">
                  {student.xp}
                </span>
              </td>
              <td className="p-2">
                <span className="text-xs font-arcade text-arcade-green">
                  {student.badges.length}
                </span>
              </td>
              <td className="p-2">
                <span className="text-xs font-arcade text-arcade-cyan">
                  {student.snakeScore}
                </span>
              </td>
              <td className="p-2">
                <span className="text-xs font-arcade text-arcade-neon-pink">
                  {student.spaceScore}
                </span>
              </td>
              <td className="p-2">
                <span className="text-xs font-arcade text-arcade-purple">
                  {student.totalQuestsCompleted}
                </span>
              </td>
              <td className="p-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`text-xs ${
                        i < student.stars ? 'text-arcade-yellow' : 'text-arcade-gray'
                      }`}
                    >
                      ⭐
                    </span>
                  ))}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard; 