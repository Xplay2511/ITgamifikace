import React, { useState } from 'react';
import { Student, Badge } from '../types';

interface TeacherDashboardProps {
  students: Student[];
  badges: Badge[];
  onUpdateStudent: (studentId: string, updates: Partial<Student>) => void;
  onExportData: () => void;
  onDeleteStudent?: (studentId: string) => void;
}

const TeacherDashboard: React.FC<TeacherDashboardProps> = ({
  students,
  badges,
  onUpdateStudent,
  onExportData,
  onDeleteStudent
}) => {
  const [selectedStudent, setSelectedStudent] = useState<string | null>(null);
  const [xpToAdd, setXpToAdd] = useState('');
  const [starsToAdd, setStarsToAdd] = useState('');

  const handleAddXP = () => {
    if (selectedStudent && xpToAdd) {
      const student = students.find(s => s.id === selectedStudent);
      if (student) {
        onUpdateStudent(selectedStudent, {
          xp: student.xp + parseInt(xpToAdd)
        });
        setXpToAdd('');
      }
    }
  };

  const handleAddStars = () => {
    if (selectedStudent && starsToAdd) {
      const student = students.find(s => s.id === selectedStudent);
      if (student) {
        onUpdateStudent(selectedStudent, {
          stars: Math.min(5, student.stars + parseInt(starsToAdd))
        });
        setStarsToAdd('');
      }
    }
  };

  const handleUnlockBadge = (badgeId: string) => {
    if (selectedStudent) {
      const student = students.find(s => s.id === selectedStudent);
      if (student && !student.badges.includes(badgeId)) {
        onUpdateStudent(selectedStudent, {
          badges: [...student.badges, badgeId]
        });
      }
    }
  };

  const handleRemoveBadge = (badgeId: string) => {
    if (selectedStudent) {
      const student = students.find(s => s.id === selectedStudent);
      if (student && student.badges.includes(badgeId)) {
        onUpdateStudent(selectedStudent, {
          badges: student.badges.filter(id => id !== badgeId)
        });
      }
    }
  };

  const selectedStudentData = students.find(s => s.id === selectedStudent);

  return (
    <div className="min-h-screen bg-gradient-to-br from-arcade-purple to-arcade-cyan p-4">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div className="arcade-card p-6">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-arcade text-arcade-purple">
              👨‍🏫 Učitelský panel
            </h1>
            <button onClick={onExportData} className="arcade-button">
              📊 Export dat
            </button>
          </div>
          <p className="text-sm font-arcade text-arcade-gray">
            Správa studentů, odznaků a bodů
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Students List */}
          <div className="arcade-card p-6">
            <h2 className="text-xl font-arcade text-arcade-purple mb-4">
              📚 Seznam studentů
            </h2>
            <div className="space-y-2 max-h-96 overflow-y-auto">
              {students.map((student) => (
                <div
                  key={student.id}
                  className={`p-3 rounded cursor-pointer transition-all ${
                    selectedStudent === student.id
                      ? 'bg-arcade-yellow bg-opacity-20 border-2 border-arcade-neon-green'
                      : 'bg-arcade-light-gray hover:bg-arcade-gray'
                  }`}
                  onClick={() => setSelectedStudent(student.id)}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-arcade text-arcade-dark">
                        {student.name}
                      </div>
                      <div className="text-xs font-arcade text-arcade-gray">
                        XP: {student.xp} | Odznaky: {student.badges.length} | Snake: {student.snakeScore} | Space: {student.spaceScore}
                      </div>
                    </div>
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
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Student Management */}
          <div className="arcade-card p-6">
            <h2 className="text-xl font-arcade text-arcade-purple mb-4">
              ⚙️ Správa studenta
            </h2>
            
            {selectedStudent ? (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-arcade text-arcade-dark mb-2">
                    Přidat XP:
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="number"
                      value={xpToAdd}
                      onChange={(e) => setXpToAdd(e.target.value)}
                      className="flex-1 px-3 py-2 border-2 border-arcade-neon-green rounded font-arcade text-sm"
                      placeholder="Počet XP"
                    />
                    <button onClick={handleAddXP} className="arcade-button">
                      ➕
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-arcade text-arcade-dark mb-2">
                    Přidat hvězdy:
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="number"
                      min="1"
                      max="5"
                      value={starsToAdd}
                      onChange={(e) => setStarsToAdd(e.target.value)}
                      className="flex-1 px-3 py-2 border-2 border-arcade-neon-green rounded font-arcade text-sm"
                      placeholder="1-5"
                    />
                    <button onClick={handleAddStars} className="arcade-button">
                      ⭐
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-arcade text-arcade-dark mb-2">
                    Správa odznaků:
                  </label>
                  <div className="grid grid-cols-2 gap-2 max-h-48 overflow-y-auto">
                    {badges.map((badge) => {
                      const student = students.find(s => s.id === selectedStudent);
                      const isUnlocked = student?.badges.includes(badge.id);
                      
                      return (
                        <div key={badge.id} className="flex gap-1">
                          <button
                            onClick={() => handleUnlockBadge(badge.id)}
                            disabled={isUnlocked}
                            className={`flex-1 p-2 text-xs font-arcade rounded ${
                              isUnlocked
                                ? 'bg-arcade-green text-white cursor-not-allowed'
                                : 'arcade-button'
                            }`}
                          >
                            {badge.icon} {badge.name}
                          </button>
                          {isUnlocked && (
                            <button
                              onClick={() => handleRemoveBadge(badge.id)}
                              className="p-2 text-xs font-arcade bg-arcade-neon-pink text-white rounded hover:bg-red-600"
                              title="Odebrat odznak"
                            >
                              ❌
                            </button>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Selected Student Info */}
                {selectedStudentData && (
                  <div className="mt-4 p-3 bg-arcade-light-gray rounded">
                    <h4 className="text-sm font-arcade text-arcade-purple mb-2">
                      📊 Informace o studentovi
                    </h4>
                    <div className="text-xs font-arcade text-arcade-dark space-y-1">
                      <div>Jméno: {selectedStudentData.name}</div>
                      <div>XP: {selectedStudentData.xp}</div>
                      <div>Odznaky: {selectedStudentData.badges.length}/{badges.length}</div>
                      <div>Snake skóre: {selectedStudentData.snakeScore}</div>
                      <div>Space skóre: {selectedStudentData.spaceScore}</div>
                      <div>Denní výzvy: {selectedStudentData.totalQuestsCompleted}</div>
                      <div>Hvězdy: {selectedStudentData.stars}/5</div>
                    </div>
                  </div>
                )}

                {selectedStudent && (
                  <button
                    className="arcade-button bg-arcade-neon-pink text-white mt-4"
                    onClick={() => {
                      if (onDeleteStudent && window.confirm('Opravdu chcete studenta nenávratně smazat?')) {
                        onDeleteStudent(selectedStudent);
                        setSelectedStudent(null);
                      }
                    }}
                  >
                    🗑️ Smazat studenta
                  </button>
                )}
              </div>
            ) : (
              <p className="text-sm font-arcade text-arcade-gray">
                Vyber studenta pro správu
              </p>
            )}
          </div>
        </div>

        {/* Statistics */}
        <div className="arcade-card p-6">
          <h2 className="text-xl font-arcade text-arcade-purple mb-4">
            📈 Statistiky třídy
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-arcade text-arcade-yellow">
                {students.length}
              </div>
              <div className="text-xs font-arcade text-arcade-gray">Studentů</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-arcade text-arcade-green">
                {students.reduce((sum, s) => sum + s.xp, 0)}
              </div>
              <div className="text-xs font-arcade text-arcade-gray">Celkem XP</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-arcade text-arcade-cyan">
                {students.reduce((sum, s) => sum + s.badges.length, 0)}
              </div>
              <div className="text-xs font-arcade text-arcade-gray">Odznaků</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-arcade text-arcade-neon-pink">
                {Math.max(...students.map(s => s.snakeScore))}
              </div>
              <div className="text-xs font-arcade text-arcade-gray">Nejlepší Snake</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard; 