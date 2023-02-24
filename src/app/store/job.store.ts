import { Injectable } from '@angular/core';
import { JobModel } from '../model/job';

@Injectable()
export class JobStore {
  private _jobList: JobModel[] = [
    {
      roll: 'tank',
      name_en: 'paladin',
      name_jp: 'ナイト',
    },
    {
      roll: 'tank',
      name_en: 'warrior',
      name_jp: '戦士',
    },
    {
      roll: 'tank',
      name_en: 'darkknight',
      name_jp: '暗黒騎士',
    },
    {
      roll: 'tank',
      name_en: 'gunbreaker',
      name_jp: 'ガンブレイカー',
    },
    {
      roll: 'healer',
      name_en: 'whitemage',
      name_jp: '白魔道士',
    },
    {
      roll: 'healer',
      name_en: 'astrologian',
      name_jp: '占星術師',
    },
    {
      roll: 'healer',
      name_en: 'scholar',
      name_jp: '学者',
    },
    {
      roll: 'healer',
      name_en: 'sage',
      name_jp: '賢者',
    },
    {
      roll: 'melee',
      name_en: 'monk',
      name_jp: 'モンク',
    },
    {
      roll: 'melee',
      name_en: 'dragoon',
      name_jp: '竜騎士',
    },
    {
      roll: 'melee',
      name_en: 'ninja',
      name_jp: '忍者',
    },
    {
      roll: 'melee',
      name_en: 'samurai',
      name_jp: '侍',
    },
    {
      roll: 'melee',
      name_en: 'reaper',
      name_jp: 'リーパー',
    },
    {
      roll: 'physical-range',
      name_en: 'bard',
      name_jp: '吟遊詩人',
    },
    {
      roll: 'physical-range',
      name_en: 'machinist',
      name_jp: '機工士',
    },
    {
      roll: 'physical-range',
      name_en: 'dancer',
      name_jp: '踊り子',
    },
    {
      roll: 'magical-range',
      name_en: 'blackmage',
      name_jp: '黒魔道士',
    },
    {
      roll: 'magical-range',
      name_en: 'summoner',
      name_jp: '召喚士',
    },
    {
      roll: 'magical-range',
      name_en: 'redmage',
      name_jp: '赤魔道士',
    },
  ];
  private _checkJobList: string[] = [];
  private _soloSkillList: string[] = [
    'ランパート',
    'ブルワーク',
    'センチネル',
    'インターベンション',
    'ホーリーシェルトロン',
    'インビンシブル',
    'ランパート',
    'スリル・オブ・バトル',
    'ヴェンジェンス',
    '原初の血気',
    '原初の猛り',
    'エクリブリウム',
    'ホルムギャング',
    'ランパート',
    'シャドウウォール',
    'ダークマインド',
    'ブラックナイト',
    'オブレーション',
    'リビングデッド',
    'ランパート',
    'カモフラージュ',
    'ネビュラ',
    'ハート・オブ・コランダム',
    'ボーライド',
    'インドゥルゲンティア',
    'アサイズ',
    'リタージー・オブ・ベル(ダメージトリガー)',
    'アクアヴェール',
    'ディヴァインベニゾン',
    'テトラグラマトン',
    'ベネディクション',
    'アスペクト・ヘリオス',
    '星天対抗',
    'アーサリースター(星の支配者)',
    'ホロスコープ',
    'マクロコスモス(最小)',
    'ディグニティ(最小)',
    'エクザルテーション',
    '星天交差',
    'アスペクト・ベネフィク',
    '光の囁き',
    '不撓不屈の策',
    'フェイブレッシング',
    'コンソレイション',
    '転化',
    '秘策',
    '生命活性法',
    '生命回生法',
    '鼓舞激励の策',
    '深謀遠慮の策',
    'ゾーエ',
    'ピュシスII(追加効果)',
    'イックソコレ',
    'ペプシス(エウクラシア・ディアグノシス)',
    'プネウマ',
    'ドルオコレ',
    'タウロコレ',
    'エウクラシア・ディアグノシス',
    'ハイマ',
    'リゾーマタ',
    'ハート・オブ・ストーン',
    'シェルトロン',
    '原初の直感',
  ];

  constructor() {}

  public get checkJobList(): string[] {
    return this._checkJobList;
  }

  public set checkJobList(value: string[]) {
    this._checkJobList = value;
  }

  public get jobList(): JobModel[] {
    return this._jobList;
  }

  public get soloSkillList(): string[] {
    return this._soloSkillList;
  }

  public getTankList(): JobModel[] {
    return this._jobList.filter((val) => val.roll == 'tank');
  }

  public getHealerList(): JobModel[] {
    return this._jobList.filter((val) => val.roll == 'healer');
  }

  public getMeleeList(): JobModel[] {
    return this._jobList.filter((val) => val.roll == 'melee');
  }

  public getPhysicalRangeList(): JobModel[] {
    return this._jobList.filter((val) => val.roll == 'physical-range');
  }

  public getMagicalRangeList(): JobModel[] {
    return this._jobList.filter((val) => val.roll == 'magical-range');
  }
}
