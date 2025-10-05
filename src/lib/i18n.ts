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
      appearanceHint: "You can change the color theme and light/dark mode from the menu in the top-right corner.",
      lightMode: "Light",
      darkMode: "Dark",
      systemMode: "System",
      themesLabel: "Themes",
    },
    themes: {
        "default": "Default",
        "noche-azul": "Blue Night",
        "lila-futurista": "Futuristic Lilac",
        "hielo-contraste": "Ice Contrast",
        "cyberpunk-suave": "Soft Cyberpunk",
        "naranja-tech": "Tech Orange",
        "lima-startup": "Startup Lime",
        "cielo-calmo": "Calm Sky",
        "dashboard-dorado": "Golden Dashboard",
        "ia-creativa": "Creative AI",
        "cosmos-purpura": "Purple Cosmos",
        "panel-esmeralda": "Emerald Panel",
        "rojo-startup": "Startup Red",
        "codigo-minimalista": "Minimalist Code",
        "hacker-elegante": "Elegant Hacker",
        "ocaso-creativo": "Creative Sunset",
        "terminal-verde": "Green Terminal",
        "amor-soft": "Soft Love",
        "acero-simple": "Simple Steel",
        "portfolio-purpura": "Purple Portfolio",
        "saas-confiable": "Reliable SaaS"
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
      appearanceHint: "Puedes cambiar el tema de color y el modo claro/oscuro desde el menú de la esquina superior derecha.",
      lightMode: "Claro",
      darkMode: "Oscuro",
      systemMode: "Sistema",
      themesLabel: "Temas",
    },
    themes: {
        "default": "Por Defecto",
        "noche-azul": "Noche Azul",
        "lila-futurista": "Lila Futurista",
        "hielo-contraste": "Hielo Contraste",
        "cyberpunk-suave": "Cyberpunk Suave",
        "naranja-tech": "Naranja Tech",
        "lima-startup": "Lima Startup",
        "cielo-calmo": "Cielo Calmo",
        "dashboard-dorado": "Dashboard Dorado",
        "ia-creativa": "IA Creativa",
        "cosmos-purpura": "Cosmos Púrpura",
        "panel-esmeralda": "Panel Esmeralda",
        "rojo-startup": "Rojo Startup",
        "codigo-minimalista": "Código Minimalista",
        "hacker-elegante": "Hacker Elegante",
        "ocaso-creativo": "Ocaso Creativo",
        "terminal-verde": "Terminal Verde",
        "amor-soft": "Amor Soft",
        "acero-simple": "Acero Simple",
        "portfolio-purpura": "Portfolio Púrpura",
        "saas-confiable": "SaaS Confiable"
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
      appearanceHint: "Você pode alterar o tema de cores e o modo claro/escuro no menu do canto superior direito.",
      lightMode: "Claro",
      darkMode: "Escuro",
      systemMode: "Sistema",
      themesLabel: "Temas",
    },
    themes: {
        "default": "Padrão",
        "noche-azul": "Noite Azul",
        "lila-futurista": "Lilás Futurista",
        "hielo-contraste": "Contraste de Gelo",
        "cyberpunk-suave": "Cyberpunk Suave",
        "naranja-tech": "Laranja Tech",
        "lima-startup": "Lima Startup",
        "cielo-calmo": "Céu Calmo",
        "dashboard-dorado": "Painel Dourado",
        "ia-creativa": "IA Criativa",
        "cosmos-purpura": "Cosmos Roxo",
        "panel-esmeralda": "Painel Esmeralda",
        "rojo-startup": "Vermelho Startup",
        "codigo-minimalista": "Código Minimalista",
        "hacker-elegante": "Hacker Elegante",
        "ocaso-creativo": "Pôr do Sol Criativo",
        "terminal-verde": "Terminal Verde",
        "amor-soft": "Amor Suave",
        "acero-simple": "Aço Simples",
        "portfolio-purpura": "Portfólio Roxo",
        "saas-confiable": "SaaS Confiável"
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
