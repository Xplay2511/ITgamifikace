import React, { useState } from 'react';
import { AvatarSettings } from '../types';

interface AvatarBuilderProps {
  avatar: AvatarSettings;
  onAvatarChange: (avatar: AvatarSettings) => void;
  onComplete: () => void;
  isCompact?: boolean;
  onOpenEditor?: () => void;
}

const AvatarBuilder: React.FC<AvatarBuilderProps> = ({ 
  avatar, 
  onAvatarChange, 
  onComplete,
  isCompact = false,
  onOpenEditor
}) => {
  const [currentAvatar, setCurrentAvatar] = useState<AvatarSettings>(avatar);

  const handleChange = (key: keyof AvatarSettings, value: string | boolean | undefined) => {
    const newAvatar = { ...currentAvatar, [key]: value };
    setCurrentAvatar(newAvatar);
    onAvatarChange(newAvatar);
  };

  const renderAvatar = (settings: AvatarSettings) => {
    const skinColors = {
      light: '#FFDBB4',
      medium: '#C68642',
      dark: '#8D5524',
      tan: '#D2B48C'
    };

    const hairColors = {
      brown: '#8B4513',
      blonde: '#F4D03F',
      black: '#2C3E50',
      red: '#E74C3C',
      gray: '#95A5A6',
      white: '#ECF0F1',
      purple: '#9B59B6'
    };

    const shirtColors = {
      blue: '#3498DB',
      red: '#E74C3C',
      green: '#2ECC71',
      purple: '#9B59B6',
      pink: '#E91E63',
      yellow: '#F1C40F',
      orange: '#E67E22',
      black: '#2C3E50',
      white: '#ECF0F1'
    };

    const accessoryColors = {
      gold: '#F39C12',
      silver: '#BDC3C7',
      bronze: '#E67E22',
      rainbow: 'linear-gradient(45deg, #ff0000, #ff8000, #ffff00, #80ff00, #00ff00, #00ff80, #00ffff, #0080ff, #0000ff, #8000ff, #ff00ff, #ff0080)'
    };

    return (
      <div className={`${isCompact ? 'w-16 h-16' : 'w-32 h-32'} bg-arcade-dark rounded-lg p-2 mx-auto mb-4`}>
        <div className="w-full h-full relative">
          {/* Hlava */}
          <div 
            className="absolute top-2 left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full"
            style={{ backgroundColor: skinColors[settings.skinColor as keyof typeof skinColors] }}
          />
          
          {/* Vlasy */}
          <div 
            className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-8 rounded-t-full"
            style={{ backgroundColor: hairColors[settings.hair as keyof typeof hairColors] }}
          />
          
          {/* Oči */}
          <div className="absolute top-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
            <div 
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: settings.eyes === 'brown' ? '#8B4513' : 
                      settings.eyes === 'blue' ? '#3498DB' : 
                      settings.eyes === 'green' ? '#27AE60' : 
                      settings.eyes === 'hazel' ? '#D68910' : '#95A5A6' }}
            />
            <div 
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: settings.eyes === 'brown' ? '#8B4513' : 
                      settings.eyes === 'blue' ? '#3498DB' : 
                      settings.eyes === 'green' ? '#27AE60' : 
                      settings.eyes === 'hazel' ? '#D68910' : '#95A5A6' }}
            />
          </div>

          {/* Ústa */}
          {settings.mouth && (
            <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-4 h-1 bg-black rounded-full"></div>
          )}
          
          {/* Tělo - oblečení */}
          <div 
            className="absolute top-14 left-1/2 transform -translate-x-1/2 w-12 h-16 rounded"
            style={{ backgroundColor: shirtColors[settings.shirtColor as keyof typeof shirtColors] }}
          />

          {/* Doplňky */}
          {settings.accessory && (
            <div 
              className="absolute top-12 left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-2"
              style={{ 
                borderColor: accessoryColors[settings.accessory as keyof typeof accessoryColors],
                background: settings.accessory === 'rainbow' ? accessoryColors.rainbow : 'transparent'
              }}
            />
          )}

          {/* Čepice */}
          {settings.hat && (
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
              {settings.hat === 'cap' && (
                <div 
                  className="w-20 h-8 rounded-t-full relative"
                  style={{ backgroundColor: '#E74C3C' }}
                >
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-16 h-2 bg-white rounded-full"></div>
                </div>
              )}
              {settings.hat === 'hat' && (
                <div 
                  className="w-18 h-6 rounded-t-full"
                  style={{ backgroundColor: '#2C3E50' }}
                />
              )}
              {settings.hat === 'crown' && (
                <div className="w-16 h-4 flex justify-center">
                  <div className="w-2 h-4 bg-yellow-400 mx-0.5"></div>
                  <div className="w-2 h-4 bg-yellow-400 mx-0.5"></div>
                  <div className="w-2 h-4 bg-yellow-400 mx-0.5"></div>
                  <div className="w-2 h-4 bg-yellow-400 mx-0.5"></div>
                  <div className="w-2 h-4 bg-yellow-400 mx-0.5"></div>
                </div>
              )}
              {settings.hat === 'wizard' && (
                <div 
                  className="w-12 h-8 rounded-t-full"
                  style={{ backgroundColor: '#9B59B6' }}
                />
              )}
            </div>
          )}
        </div>
      </div>
    );
  };

  if (isCompact) {
    return (
      <div className="flex items-center gap-2">
        {renderAvatar(currentAvatar)}
        <button
          onClick={onOpenEditor}
          className="arcade-button text-xs px-2 py-1"
          title="Upravit avatar"
        >
          ✏️
        </button>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
      <div className="arcade-card p-6 max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        <h2 className="text-xl font-arcade text-arcade-purple mb-4 text-center">
          👤 Vytvoř si svůj avatar
        </h2>

        {/* Avatar preview */}
        <div className="mb-6">
          {renderAvatar(currentAvatar)}
        </div>

        {/* Customization options */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          {/* Vlasy */}
          <div>
            <label className="block text-sm font-arcade text-arcade-dark mb-2">
              💇 Vlasy:
            </label>
            <select
              value={currentAvatar.hair}
              onChange={(e) => handleChange('hair', e.target.value)}
              className="w-full px-3 py-2 border-2 border-arcade-neon-green rounded font-arcade text-sm"
            >
              <option value="brown">Hnědé</option>
              <option value="blonde">Světlé</option>
              <option value="black">Černé</option>
              <option value="red">Červené</option>
              <option value="gray">Šedé</option>
              <option value="white">Bílé</option>
              <option value="purple">Fialové</option>
            </select>
          </div>

          {/* Pleť */}
          <div>
            <label className="block text-sm font-arcade text-arcade-dark mb-2">
              🎨 Pleť:
            </label>
            <select
              value={currentAvatar.skinColor}
              onChange={(e) => handleChange('skinColor', e.target.value)}
              className="w-full px-3 py-2 border-2 border-arcade-neon-green rounded font-arcade text-sm"
            >
              <option value="light">Světlá</option>
              <option value="medium">Střední</option>
              <option value="dark">Tmavá</option>
              <option value="tan">Opálená</option>
            </select>
          </div>

          {/* Tričko */}
          <div>
            <label className="block text-sm font-arcade text-arcade-dark mb-2">
              👕 Tričko:
            </label>
            <select
              value={currentAvatar.shirtColor}
              onChange={(e) => handleChange('shirtColor', e.target.value)}
              className="w-full px-3 py-2 border-2 border-arcade-neon-green rounded font-arcade text-sm"
            >
              <option value="blue">Modré</option>
              <option value="red">Červené</option>
              <option value="green">Zelené</option>
              <option value="purple">Fialové</option>
              <option value="pink">Růžové</option>
              <option value="yellow">Žluté</option>
              <option value="orange">Oranžové</option>
              <option value="black">Černé</option>
              <option value="white">Bílé</option>
            </select>
          </div>

          {/* Oči */}
          <div>
            <label className="block text-sm font-arcade text-arcade-dark mb-2">
              👁️ Oči:
            </label>
            <select
              value={currentAvatar.eyes}
              onChange={(e) => handleChange('eyes', e.target.value)}
              className="w-full px-3 py-2 border-2 border-arcade-neon-green rounded font-arcade text-sm"
            >
              <option value="brown">Hnědé</option>
              <option value="blue">Modré</option>
              <option value="green">Zelené</option>
              <option value="hazel">Oříškové</option>
              <option value="gray">Šedé</option>
            </select>
          </div>

          {/* Ústa */}
          <div>
            <label className="block text-sm font-arcade text-arcade-dark mb-2">
              😊 Ústa:
            </label>
            <select
              value={currentAvatar.mouth ? 'yes' : 'no'}
              onChange={(e) => handleChange('mouth', e.target.value === 'yes')}
              className="w-full px-3 py-2 border-2 border-arcade-neon-green rounded font-arcade text-sm"
            >
              <option value="yes">Zobrazit</option>
              <option value="no">Skrýt</option>
            </select>
          </div>

          {/* Čepice */}
          <div>
            <label className="block text-sm font-arcade text-arcade-dark mb-2">
              🧢 Čepice:
            </label>
            <select
              value={currentAvatar.hat || 'none'}
              onChange={(e) => handleChange('hat', e.target.value === 'none' ? undefined : e.target.value)}
              className="w-full px-3 py-2 border-2 border-arcade-neon-green rounded font-arcade text-sm"
            >
              <option value="none">Žádná</option>
              <option value="cap">Baseball čepice</option>
              <option value="hat">Klobouk</option>
              <option value="crown">Koruna</option>
              <option value="wizard">Čaroděj</option>
            </select>
          </div>

          {/* Doplňky */}
          <div>
            <label className="block text-sm font-arcade text-arcade-dark mb-2">
              💎 Doplňky:
            </label>
            <select
              value={currentAvatar.accessory || 'none'}
              onChange={(e) => handleChange('accessory', e.target.value === 'none' ? undefined : e.target.value)}
              className="w-full px-3 py-2 border-2 border-arcade-neon-green rounded font-arcade text-sm"
            >
              <option value="none">Žádné</option>
              <option value="gold">Zlatý náhrdelník</option>
              <option value="silver">Stříbrný náhrdelník</option>
              <option value="bronze">Bronzový náhrdelník</option>
              <option value="rainbow">Duhový náhrdelník</option>
            </select>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex gap-4">
          <button
            onClick={onComplete}
            className="flex-1 arcade-button text-lg py-3"
          >
            ✅ Hotovo
          </button>
        </div>

        <div className="mt-4 text-center">
          <p className="text-xs font-arcade text-arcade-gray">
            Vytvoř si svůj pixelový avatar a začni dobrodružství!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AvatarBuilder; 