//「ファイルパスとファイル名」「表示するテキスト」の順で用意した音声パーツの情報を入力してください。
//予め入力されているサンプルを参考に入力してください。
//1行1文節で設定してください。
//無音パーツは流用して使っていただいても構いません。
//ダブルクォートや括弧、カンマ記号に1文字でも不備があると正しく読み込ませません。
soundData = 
[
 ["tyaimu.wav", "♪接近メロディ(旧)"],
 ["kuda.wav", "♪接近メロディ(下り)"],
 ["nobo.wav", "♪接近メロディ(上り)"],
 ["mamonaku.wav", "まもなく"],
 ["番線/1b.wav", "1番線に"],
 ["番線/2b.wav", "2番線に"],
 ["番線/3b.wav", "3番線に"],
 ["番線/4b.wav", "4番線に"],
 ["", ""],
 ["番線/2bw.wav", "2番線を"],
 ["tg.wav", "電車が"],
 ["TSU.wav", "通過します"],
 ["tyui.wav", "ご注意ください"],
 ["tuka.wav", "♪通過メロディ(1ループ)"],
 ["oldtuka.wav", "♪通過チャイム(1ループ)"],
 ["", ""],
 ["1.wav", "1"],
 ["5.wav", "5"],
 ["7.wav", "7"],
 ["8.wav", "8"],
 ["番線/b.wav", "番線に"],
 ["", ""],
 ["種別/A.wav", "快速特急"],
 ["種別/RA.wav", "臨時快速特急"],
 ["種別/KB.wav", "K特急"],
 ["種別/B.wav", "特急"],
 ["種別/RB.wav", "臨時特急"],
 ["種別/L.wav", "ライナー"],
 ["種別/C.wav", "通勤快急"],
 ["種別/D.wav", "快速急行"],
 ["種別/RD.wav", "臨時快速急行"],
 ["種別/E.wav", "深夜急行"],
 ["種別/F.wav", "急行"],
 ["種別/RF.wav", "臨時急行"],
 ["種別/J.wav", "通勤準急"],
 ["種別/K.wav", "準急"],
 ["種別/P.wav", "区間急行"],
 ["種別/Q.wav", "各駅停車"],
 ["", ""],
 ["種別/raku.wav", "洛楽"],
 ["種別/KW.wav", "交野線"],
 ["", ""],
 ["行き先/Z.wav", "出町柳行きが"],
 ["行き先/S.wav", "三条行きが"],
 ["行き先/C.wav", "中書島行きが"],
 ["行き先/U.wav", "宇治行きが"],
 ["行き先/Y.wav", "淀行きが"],
 ["行き先/R.wav", "樟葉行きが"],
 ["行き先/H.wav", "枚方市行きが"],
 ["行き先/W.wav", "私市行きが↑"],
 ["行き先/W1.wav", "私市行きが→"],
 ["行き先/K.wav", "香里園行きが"],
 ["行き先/N.wav", "寝屋川市行きが"],
 ["行き先/Q.wav", "萱島行きが"],
 ["行き先/M.wav", "守口市行きが"],
 ["行き先/T.wav", "天満橋行きが"],
 ["行き先/A.wav", "淀屋橋行きが"],
 ["行き先/B.wav", "中之島行きが"],
 ["", ""],
 ["両/8r.wav", "8両で"],
 ["両/7r.wav", "7両で"],
 ["両/6r.wav", "6両で(未準備)"],
 ["両/5r.wav", "5両で"],
 ["両/4r.wav", "4両で"],
 ["両/r.wav", "～両で"],
 ["", ""],
 ["totyaku.wav", "到着します↓"],
 ["totyaku1.wav", "到着します↑"],
 ["null-1000.mp3", "(無音1.0秒)"],
 ["null-500.mp3", "(無音0.5秒)"],
 ["yel.wav", "黄色の乗車位置"],
 ["yer.wav", "黄色い乗車位置"],
 ["yelgre.wav", "黄色または緑の乗車位置"],
 ["gre.wav", "緑の乗車位置"],
 ["j.wav", "の乗車位置"],
 ["sanka.wav", "三角印の"],
 ["maru.wav", "丸印の"],
 ["1~.wav", "1番から"],
 ["2~.wav", "2番から"],
 ["3~.wav", "3番から"],
 ["~.wav", "番から"],
 ["~4.wav", "4番で"],
 ["~7.wav", "7番で"],
 ["~8.wav", "8番で"],
 ["~..wav", "番で"],
 ["homeushiro.wav", "ホームの後ろの方でお待ち下さい"],
 ["omati.wav", "お待ち下さい"],
 ["", ""],
 ["kono.wav", "この電車は"],
 ["5t.wav", "5扉車です"],
 ["null-2000.mp3", "(無音2.0秒)"],
 ["kono2.wav", "この電車の"],
 ["mae.wav", "1番前の"],
 ["syaryo.wav", "車両は"],
 ["jose.wav", "女性専用車両です"],
 ["6c.wav", "6号車は"],
 ["pure.wav", "プレミアムカーです"],
 ["null-2000.mp3", "(無音2.0秒)"],
 ["nohoka.wav", "～の他に"],
 ["josha.wav", "乗車券の他に"],
 ["pt.wav", "プレミアムカー券が"],
 ["nc.wav", "必要です"],
 ["null-2000.mp3", "(無音2.0秒)"],
 ["停車駅/next.wav", "次の停車駅は"],
 ["next.wav", "次の"],
 ["T.wav", "途中の停車駅は"],
 ["teisha.wav", "停車駅は"],
 ["停車駅/kakut.wav", "各駅と"],
 ["停車駅/Z.wav", "出町柳です"],
 ["停車駅/J.wav", "神宮丸太町"],
 ["停車駅/S.wav", "三条"],
 ["停車駅/GI.wav", "祇園四条"],
 ["停車駅/KI.wav", "清水五条"],
 ["停車駅/SI.wav", "七条"],
 ["停車駅/F.wav", "伏見稲荷"],
 ["停車駅/TB.wav", "丹波橋"],
 ["停車駅/C.wav", "中書島"],
 ["停車駅/D.wav", "石清水八幡宮"],
 ["停車駅/R.wav", "樟葉"],
 ["停車駅/H.wav", "枚方市"],
 ["停車駅/HK.wav", "枚方公園"],
 ["停車駅/K.wav", "香里園"],
 ["停車駅/N.wav", "寝屋川市"],
 ["停車駅/M.wav", "守口市"],
 ["停車駅/G.wav", "京橋"],
 ["停車駅/T.wav", "天満橋"],
 ["停車駅/Kita.wav", "北浜"],
 ["停車駅/Naniwa.wav", "なにわ橋"],
 ["停車駅/O.wav", "大江橋"],
 ["停車駅/Wa.wav", "渡辺橋"],
 ["停車駅/Z.wav", "出町柳です"],
 ["停車駅/A.wav", "淀屋橋です"],
 ["停車駅/B.wav", "中之島です"],
 ["停車駅/G..wav", "京橋です"],
 ["停車駅/H..wav", "枚方市です"],
 ["停車駅/R..wav", "樟葉です"],
 ["停車駅/Y..wav", "淀です"],
 ["停車駅/S..wav", "三条です"],
 [".wav", ""],
 ["停車駅/GT.wav", "京橋と"],
 ["停車駅/M,.wav", "守口市と"],
 ["停車駅/Q,.wav", "萱島と"],
 ["停車駅/H,.wav", "枚方市と"],
 [".wav", ""],
 ["停車駅/M~.wav", "守口市から"],
 ["停車駅/Q~.wav", "萱島から"],
 ["停車駅/H~.wav", "枚方市から"],
 [".wav", ""],
 ["停車駅/~Q.wav", "萱島までの"],
 ["停車駅/~K.wav", "香里園までの"],
 ["停車駅/~H.wav", "枚方市までの"],
 ["停車駅/~R.wav", "樟葉までの"],
 ["停車駅/~Y.wav", "淀までの"],
 ["停車駅/~S.wav", "三条までの"],
 ["停車駅/~Z.wav", "出町柳までの"],
 ["停車駅/~W.wav", "私市までの"],
 ["停車駅/kakud.wav", "各駅です"],
 [".wav", ""],
 ["停車駅/KN.wav", "各駅に"],
 ["停車駅/TEI.wav", "停まります"],
 ["made.wav", "までです"],
 ["null-1000.mp3", "(無音1.0秒)"],
 ["null-500.mp3", "(無音0.5秒)"],
 ["連絡/QN.wav", "萱島には"],
 ["連絡/KN.wav", "香里園には"],
 ["連絡/HN.wav", "枚方市には"],
 ["連絡/RN.wav", "樟葉には"],
 ["連絡/SN2.wav", "七条には"],
 ["連絡/GN.wav", "祇園四条には"],
 ["連絡/SN.wav", "三条には"],
 ["連絡/ZN.wav", "出町柳には"],
 ["連絡/BG.wav", "特急が"],
 ["連絡/KG.wav", "準急が"],
 ["種別/A.wav", "快速特急"],
 ["連絡/RAG.wav", "洛楽が"],
 ["連絡/KN3.wav", "この電車が"],
 ["連絡/stotyaku.wav", "先に到着します"],
 ["null-1000.mp3", "(無音1.0秒)"],
 ["null-500.mp3", "(無音0.5秒)"],
 ["連絡/M,.wav", "守口市、"],
 ["連絡/K,.wav", "香里園、"],
 ["連絡/H,.wav", "枚方市、"],
 ["連絡/GD.wav", "京橋で"],
 ["連絡/KD.wav", "香里園で"],
 ["連絡/HD.wav", "枚方市で"],
 ["連絡/RD.wav", "樟葉で"],
 ["連絡/TD.wav", "丹波橋で"],
 ["連絡/SD.wav", "三条で"],
 ["連絡/AH.wav", "淀屋橋発の"],
 ["連絡/BH.wav", "中之島発の"],
 ["連絡/BN.wav", "淀行きに"],
 ["連絡/Z.wav", "出町柳行きに"],
 ["連絡/KN2.wav", "準急に"],
 ["連絡/QN.wav", "各駅停車に"], 
 ["連絡/renra.wav", "連絡します"],
 ["連絡/.wav", ""],
 [".wav", ""],
 ["null-250.mp3", "(無音0.25秒)"],
 ["null-500.mp3", "(無音0.5秒)"],
 ["null-750.mp3", "(無音0.75秒)"],
 ["null-1000.mp3", "(無音1.0秒)"],
 ["null-2000.mp3", "(無音2.0秒)"],
 ["null-3000.mp3", "(無音3.0秒)"],

 ["sound/null-250.mp3", ""] //この最後の行は編集しないでください
 ]
