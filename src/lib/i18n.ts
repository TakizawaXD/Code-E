
type Dictionary = {
  [key: string]: any;
};

const dictionaries: { [key: string]: Dictionary } = {
  en: {
    settings: {
      profileSettingsTitle: "Profile Settings",
      profileSettingsDescription: "Modify your public profile information here.",
      fullNameLabel: "Full Name",
      fullNamePlaceholder: "Your full name",
      fullNameDescription: "This is the name that will be displayed publicly.",
      usernameLabel: "Username (Email)",
      usernameDescription: "Your email is used as your identifier and cannot be changed.",
      bioLabel: "Biography",
      bioPlaceholder: "Tell us a little about yourself...",
      bioDescription: "A brief description of your interests and what you are learning.",
      saveButton: "Save Changes",
      savingButton: "Saving...",
      updateSuccessTitle: "Profile Updated!",
      updateSuccessDescription: "Your changes have been saved successfully.",
      updateErrorTitle: "Update Error",
      appearanceTitle: "Appearance",
      appearanceDescription: "Customize the look and feel of the platform.",
      customizeButton: "Customize Appearance",
      customizeThemeTitle: "Customize Theme",
    },
    themes: {
        "default": "Default",
        "neon-sunrise": "Neon Sunrise",
        "ocean-deep": "Ocean Deep",
        "forest-whisper": "Forest Whisper",
        "royal-purple": "Royal Purple",
        "crimson-night": "Crimson Night",
        "fresh-mint": "Fresh Mint",
        "golden-hour": "Golden Hour",
        "electric-blue": "Electric Blue",
        "slate-gray": "Slate Gray",
        "cyberpunk": "Cyberpunk",
        "pastel-dream": "Pastel Dream",
        "vintage-charm": "Vintage Charm",
        "desert-mirage": "Desert Mirage",
        "toxic-green": "Toxic Green",
        "rose-quartz": "Rose Quartz",
        "arctic-night": "Arctic Night",
        "sunset-orange": "Sunset Orange",
        "lavender-bliss": "Lavender Bliss",
        "matrix": "Matrix",
    }
  },
  es: {
    settings: {
      profileSettingsTitle: "Ajustes de Perfil",
      profileSettingsDescription: "Aquí puedes modificar la información de tu perfil público.",
      fullNameLabel: "Nombre Completo",
      fullNamePlaceholder: "Tu nombre completo",
      fullNameDescription: "Este es el nombre que se mostrará públicamente.",
      usernameLabel: "Nombre de Usuario (Email)",
      usernameDescription: "Tu email se usa como identificador y no se puede cambiar.",
      bioLabel: "Biografía",
      bioPlaceholder: "Cuéntanos un poco sobre ti...",
      bioDescription: "Una breve descripción sobre tus intereses y lo que estás aprendiendo.",
      saveButton: "Guardar Cambios",
      savingButton: "Guardando...",
      updateSuccessTitle: "¡Perfil actualizado!",
      updateSuccessDescription: "Tus cambios han sido guardados correctamente.",
      updateErrorTitle: "Error al Actualizar",
      appearanceTitle: "Apariencia",
      appearanceDescription: "Personaliza la apariencia de la plataforma.",
      customizeButton: "Personalizar Apariencia",
      customizeThemeTitle: "Personalizar Tema",
    },
    themes: {
        "default": "Por Defecto",
        "neon-sunrise": "Amanecer Neón",
        "ocean-deep": "Océano Profundo",
        "forest-whisper": "Susurro del Bosque",
        "royal-purple": "Púrpura Real",
        "crimson-night": "Noche Carmesí",
        "fresh-mint": "Menta Fresca",
        "golden-hour": "Hora Dorada",
        "electric-blue": "Azul Eléctrico",
        "slate-gray": "Gris Pizarra",
        "cyberpunk": "Cyberpunk",
        "pastel-dream": "Sueño Pastel",
        "vintage-charm": "Encanto Vintage",
        "desert-mirage": "Espejismo del Desierto",
        "toxic-green": "Verde Tóxico",
        "rose-quartz": "Cuarzo Rosa",
        "arctic-night": "Noche Ártica",
        "sunset-orange": "Naranja Ocaso",
        "lavender-bliss": "Dicha Lavanda",
        "matrix": "Matrix",
    }
  },
  pt: {
    settings: {
      profileSettingsTitle: "Configurações de Perfil",
      profileSettingsDescription: "Modifique suas informações de perfil público aqui.",
      fullNameLabel: "Nome Completo",
      fullNamePlaceholder: "Seu nome completo",
      fullNameDescription: "Este é o nome que será exibido publicamente.",
      usernameLabel: "Nome de Usuário (E-mail)",
      usernameDescription: "Seu e-mail é usado como identificador e não pode ser alterado.",
      bioLabel: "Biografia",
      bioPlaceholder: "Conte-nos um pouco sobre você...",
      bioDescription: "Uma breve descrição de seus interesses e do que você está aprendendo.",
      saveButton: "Salvar Alterações",
      savingButton: "Salvando...",
      updateSuccessTitle: "Perfil Atualizado!",
      updateSuccessDescription: "Suas alterações foram salvas com sucesso.",
      updateErrorTitle: "Erro ao Atualizar",
      appearanceTitle: "Aparência",
      appearanceDescription: "Personalize a aparência da plataforma.",
      customizeButton: "Personalizar Aparência",
      customizeThemeTitle: "Personalizar Tema",
    },
    themes: {
        "default": "Padrão",
        "neon-sunrise": "Amanhecer Neon",
        "ocean-deep": "Oceano Profundo",
        "forest-whisper": "Sussurro da Floresta",
        "royal-purple": "Roxo Real",
        "crimson-night": "Noite Carmesim",
        "fresh-mint": "Menta Fresca",
        "golden-hour": "Hora Dourada",
        "electric-blue": "Azul Elétrico",
        "slate-gray": "Cinza Ardósia",
        "cyberpunk": "Cyberpunk",
        "pastel-dream": "Sonho Pastel",
        "vintage-charm": "Charme Vintage",
        "desert-mirage": "Miragem do Deserto",
        "toxic-green": "Verde Tóxico",
        "rose-quartz": "Quartzo Rosa",
        "arctic-night": "Noite Ártica",
        "sunset-orange": "Laranja Pôr do Sol",
        "lavender-bliss": "Felicidade Lavanda",
        "matrix": "Matrix",
    }
  },
};

const getLocale = (): string => {
  if (typeof navigator !== 'undefined') {
    const lang = navigator.language.split('-')[0];
    if (dictionaries[lang]) {
      return lang;
    }
  }
  return 'en'; // Default language
};

export const getDictionary = (): Dictionary => {
  const locale = getLocale();
  return dictionaries[locale] || dictionaries.en;
};
