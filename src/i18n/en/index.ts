import type { BaseTranslation } from '../i18n-types';

const en: BaseTranslation = {
  test: 'Test Text',

  // ヘッダー言語設定
  header: {
    now_lang: 'English',
    lang_sel: {
      ja: {
        main_name: '日本語',
        sub_name: 'Japanese',
      },
      en: {
        main_name: 'English',
        sub_name: 'English',
      },
    },
  },

  // サイドメニュー
  side_menu: {
    entry: {
      title: 'Sign Up',
      contents: {
        acccreate: 'Account Creation Procedure',
        acclink: 'Account Linking Procedure',
      },
    },
    begin: {
      title: 'Starting the Game',
      contents: {
        start: 'How to Start the Game',
        menu: 'Title Menu',
        character: 'Character Creation',
        adddelete: 'Adding and Deleting Characters',
        world: 'World Selection',
        tutorial: 'Tutorial',
        multiple: 'Multiple Launch of the Game',
        quit: 'Quit the Game',
      },
    },
    server: {
      title: 'Discord Features',
      contents: {
        bounty: 'Bounty System',
        gacha: 'Gacha System',
        market: 'Marketplace',
        command: 'Slash Command',
      },
    },
  },

  // 動的ルート対象外記事
  articles: {
    description:
      'Official online manual of Monster Hunter Frontier for Rain Server.',
    keywords:
      'monster hunter frontier, official online manual, mhf, online game',
    home: {
      head_title: 'MHF Online Manual',
      title: 'Home',
      news_title: 'Update History',
      news_date: 'January 1, 2023',
      news_ver: 'Ver.1.0',
      news_text:
        'Online Manual is available now!<br>Detailed differences from the former official online manual and updates can be found from "More."',
      news_more: '▶More',

      // 注目のコンテンツ
      featured_title: 'Featured Contents',
      featured_contents: {
        first: {
          maindir: 'entry/', // スラッシュ（ / ）が最後に必要
          subdir: 'acccreate/', // スラッシュ（ / ）が最後に必要
          alt: 'first',
          text: 'Before playing on the "Rain Server,"<br>what is the first thing to do?',
        },
        utahime: {
          maindir: '',
          subdir: '',
          alt: 'utahime',
          text: 'Repel the oncoming threat!<br>For more information on the "Battle of Diva Defence: True Story," click here.',
        },
        ravi: {
          maindir: '',
          subdir: '',
          alt: 'raviente',
          text: 'I want to challenge "Berserk Raviente"!',
        },
        tenrou: {
          maindir: '',
          subdir: '',
          alt: 'sky corridor',
          text: 'Investigate the unknown tower!<br>For more information on the "Sky Corridor Exploring Records," click here.',
        },
        road: {
          maindir: '',
          subdir: '',
          alt: 'road',
          text: 'What is the "Hunting Road," the endless of hunting?',
        },
        return: {
          maindir: '',
          subdir: '',
          alt: 'return ward',
          text: 'Did you come back for the first time in ages? Then let\'s go to "Return Ward"!',
        },
      },

      // 外部リンク
      extlink_title: 'External Links',
      extlink_contents: {},
    },
  },
};

export default en;
