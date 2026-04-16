// ─────────────────────────────
// パーティクル生成
// ─────────────────────────────
(function () {
  const c = document.getElementById('particles');
  for (let i = 0; i < 24; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const s = Math.random() * 2.5 + 1;
    p.style.cssText = `left:${Math.random()*100}%;width:${s}px;height:${s}px;` +
      `animation-duration:${Math.random()*16+10}s;animation-delay:${Math.random()*14}s`;
    c.appendChild(p);
  }
})();

// ─────────────────────────────
// 問題データ（110問）
// ─────────────────────────────
const QUESTIONS = [

  // ══════════════════════════════
  //  初級（30問） — ネットワーク・Linux・サーバー基礎
  // ══════════════════════════════
  {
    level:'beginner', category:'ネットワーク',
    question:'IPアドレスの主な役割は何ですか？',
    options:['ファイルを保存する場所を示す','ネットワーク上の機器を識別するための住所','データを暗号化するための鍵','Webページのデザインを定義する'],
    answer:1,
    explanation:'IPアドレスはネットワーク上の各機器に割り当てられた「住所」です。データを送受信する際に宛先・送信元を特定するために使われます。'
  },
  {
    level:'beginner', category:'ネットワーク',
    question:'DNS（Domain Name System）の主な役割は何ですか？',
    options:['データを圧縮する','ドメイン名をIPアドレスに変換する','Webページを表示する','ファイルを転送する'],
    answer:1,
    explanation:'DNSは人が読みやすいドメイン名（例: google.com）をコンピュータが理解できるIPアドレスに変換する「電話帳」のようなシステムです。'
  },
  {
    level:'beginner', category:'ネットワーク',
    question:'TCPとUDPの大きな違いは何ですか？',
    options:['TCPは高速、UDPは低速','TCPはデータ到達を保証し、UDPは保証しない','TCPは暗号化され、UDPは暗号化されない','TCPはWebで使われ、UDPはメールで使われる'],
    answer:1,
    explanation:'TCPは3ウェイハンドシェイクによりデータの到達を確認・保証します（信頼性重視）。UDPはそのチェックを行わないため高速ですが確実性が低い（速度重視）。動画ストリーミングなどでUDPが使われます。'
  },
  {
    level:'beginner', category:'ネットワーク',
    question:'HTTPとHTTPSの違いは何ですか？',
    options:['HTTPSはHTTPより高速','HTTPSは通信を暗号化する','HTTPはブラウザ専用、HTTPSはアプリ専用','HTTPSはHTTPの古いバージョン'],
    answer:1,
    explanation:'HTTPSはHTTPにSSL/TLSによる暗号化を加えたプロトコルです。通信内容が暗号化されるため、パスワードやクレジットカード情報を安全に送受信できます。'
  },
  {
    level:'beginner', category:'ネットワーク',
    question:'ポート番号80番はどのプロトコルに使われますか？',
    options:['FTP','SSH','HTTP','SMTP'],
    answer:2,
    explanation:'ポート80番はHTTP通信に使われます。ポート443番がHTTPS、ポート22番がSSH、ポート21番がFTPです。ポート番号はアプリケーションの「窓口」の番号です。'
  },
  {
    level:'beginner', category:'ネットワーク',
    question:'ルーターの主な役割は何ですか？',
    options:['同一ネットワーク内の機器を接続する','異なるネットワーク間でデータを転送する','データを暗号化する','Webページをキャッシュする'],
    answer:1,
    explanation:'ルーターは異なるネットワーク間でパケットを転送（ルーティング）する機器です。家庭のルーターは自宅ネットワークとインターネットを繋ぎます。'
  },
  {
    level:'beginner', category:'ネットワーク',
    question:'プライベートIPアドレスとパブリックIPアドレスの違いは何ですか？',
    options:['プライベートは有料、パブリックは無料','プライベートは社内/家庭内のみで使用、パブリックはインターネット上で使用','プライベートはIPv6、パブリックはIPv4','違いはない'],
    answer:1,
    explanation:'プライベートIPは組織内だけで使われるアドレス（例: 192.168.x.x）で、インターネットには出られません。パブリックIPは世界中で一意のアドレスで、インターネット上の通信に使われます。'
  },
  {
    level:'beginner', category:'ネットワーク',
    question:'サブネットマスクの役割は何ですか？',
    options:['データの暗号化','ネットワーク部とホスト部の境界を示す','通信速度を制限する','DNSアドレスを指定する'],
    answer:1,
    explanation:'サブネットマスクはIPアドレスのどの部分がネットワークを表し、どの部分がホスト（機器）を表すかを示します。例えば/24（255.255.255.0）なら上位24bitがネットワーク部です。'
  },
  {
    level:'beginner', category:'ネットワーク',
    question:'PINGコマンドの用途は何ですか？',
    options:['ファイルをダウンロードする','指定したホストとの通信疎通を確認する','DNSを設定する','ポートを開放する'],
    answer:1,
    explanation:'PINGはICMPプロトコルを使って指定したIPアドレスやホスト名に対してパケットを送り、応答があるか・応答時間はどのくらいかを確認するツールです。ネットワーク障害の第一調査に使われます。'
  },
  {
    level:'beginner', category:'ネットワーク',
    question:'ポート番号22番はどのプロトコルに使われますか？',
    options:['HTTP','FTP','SSH','DNS'],
    answer:2,
    explanation:'ポート22番はSSH（Secure Shell）に使われます。サーバーへのリモートログインや安全なコマンド実行に使われるプロトコルです。セキュリティのため、デフォルトの22番から変更することも多いです。'
  },
  {
    level:'beginner', category:'ネットワーク',
    question:'MACアドレスとは何ですか？',
    options:['Webサービスのアカウント','ネットワーク機器に固有のハードウェアアドレス','IPアドレスの別名','暗号化キー'],
    answer:1,
    explanation:'MACアドレス（Media Access Control Address）はネットワーク機器のNICに固有の物理アドレスです。同一ネットワーク内での通信に使われ、IPアドレスとは異なりハードウェアに紐付いています。'
  },
  {
    level:'beginner', category:'ネットワーク',
    question:'デフォルトゲートウェイの役割は何ですか？',
    options:['同一ネットワーク内の通信を管理する','外部ネットワーク（インターネット等）への出口となる機器','DNSサーバーの場所を示す','パスワードを管理する'],
    answer:1,
    explanation:'デフォルトゲートウェイは、宛先が同一ネットワーク外の場合にパケットを送る先の機器（通常はルーター）です。自宅ネットワークからインターネットに出るための「出口」です。'
  },
  {
    level:'beginner', category:'Linux',
    question:'Linuxで「ls」コマンドの用途は何ですか？',
    options:['ファイルを削除する','ディレクトリの内容を一覧表示する','ファイルをコピーする','テキストを検索する'],
    answer:1,
    explanation:'ls（list）コマンドはカレントディレクトリまたは指定したディレクトリのファイルやフォルダの一覧を表示します。ls -laで詳細情報（パーミッション・サイズ・更新日時）も表示できます。'
  },
  {
    level:'beginner', category:'Linux',
    question:'Linuxのパーミッション「chmod 755」における「7」は何を意味しますか？',
    options:['読み取り専用','読み取り・書き込み・実行の全権限','書き込み・実行のみ','実行のみ'],
    answer:1,
    explanation:'パーミッションは2進数で表され、読み取り(4)+書き込み(2)+実行(1)=7です。chmod 755は「オーナーが全権限（7）、グループと他者は読み取りと実行のみ（5）」を意味します。'
  },
  {
    level:'beginner', category:'Linux',
    question:'Linuxの/etcディレクトリには主に何が格納されていますか？',
    options:['ユーザーのホームディレクトリ','システム設定ファイル','実行可能なコマンド','ログファイル'],
    answer:1,
    explanation:'/etcにはシステムの設定ファイルが格納されます（例: /etc/nginx/nginx.conf、/etc/hosts）。/homeはユーザーのホームディレクトリ、/binや/usrはコマンド、/varにはログが格納されます。'
  },
  {
    level:'beginner', category:'Linux',
    question:'「sudo」コマンドの役割は何ですか？',
    options:['ファイルを削除する','管理者権限でコマンドを実行する','ネットワークを確認する','サービスを起動する'],
    answer:1,
    explanation:'sudoは「superuser do」の略で、一時的にrootユーザーの権限でコマンドを実行します。通常ユーザーでは実行できないシステム操作（パッケージインストール等）に使います。'
  },
  {
    level:'beginner', category:'Linux',
    question:'「grep」コマンドの用途は何ですか？',
    options:['ファイルをコピーする','テキストファイルから特定のパターンを検索する','ディレクトリを作成する','プロセスを終了する'],
    answer:1,
    explanation:'grepはファイルや出力から特定の文字列・正規表現にマッチする行を検索・表示するコマンドです。例: grep "error" /var/log/nginx/error.log でエラーログを検索できます。'
  },
  {
    level:'beginner', category:'Linux',
    question:'「tail -f」コマンドの用途は何ですか？',
    options:['ファイルの先頭を表示する','ファイルの末尾をリアルタイムで表示し続ける','ファイルを削除する','ファイルを検索する'],
    answer:1,
    explanation:'tail -fはファイルの末尾をリアルタイムで監視し続けます。Webサーバーやアプリのログファイルをリアルタイムで監視するときに非常によく使われます（例: tail -f /var/log/nginx/access.log）。'
  },
  {
    level:'beginner', category:'Linux',
    question:'「ps aux」コマンドの用途は何ですか？',
    options:['ディスクの使用量を表示する','現在実行中のプロセスを一覧表示する','ネットワーク接続を表示する','メモリ使用量を表示する'],
    answer:1,
    explanation:'ps（process status）auxは現在実行中のすべてのプロセスをユーザー・PID・CPU・メモリ使用率などと共に一覧表示します。特定プロセスの確認や異常なプロセスの調査に使います。'
  },
  {
    level:'beginner', category:'Linux',
    question:'「df -h」コマンドの用途は何ですか？',
    options:['CPUの使用率を表示する','ディスクの使用量を人が読みやすい形式で表示する','ファイルを削除する','ネットワーク接続を確認する'],
    answer:1,
    explanation:'df（disk free）-hはディスクパーティションの使用量・空き容量を人間が読みやすいKB/MB/GB単位で表示します。インフラエンジニアはサーバーのディスク残量監視に頻繁に使います。'
  },
  {
    level:'beginner', category:'Linux',
    question:'「systemctl start nginx」の役割は何ですか？',
    options:['nginxをインストールする','nginxサービスを起動する','nginxの設定を確認する','nginxをアンインストールする'],
    answer:1,
    explanation:'systemctlはsystemdを制御するコマンドです。start/stop/restart/statusなどのサブコマンドでサービスを操作できます。enable nginxはOS起動時に自動起動するよう設定します。'
  },
  {
    level:'beginner', category:'Linux',
    question:'Linuxのパッケージマネージャー（apt、yumなど）の役割は何ですか？',
    options:['プロセスを管理する','ソフトウェアのインストール・更新・削除を管理する','ファイルを暗号化する','ユーザーを管理する'],
    answer:1,
    explanation:'パッケージマネージャーはソフトウェア（パッケージ）の依存関係を自動解決しながらインストール・更新・削除を行うツールです。Ubuntuはapt、CentOS/RHELはyumやdnfを使います。'
  },
  {
    level:'beginner', category:'Linux',
    question:'シェルスクリプトの「#!/bin/bash」（シバン行）の役割は何ですか？',
    options:['スクリプトの著者を示す','このスクリプトをどのインタープリタで実行するかを示す','スクリプトのバージョンを示す','コメント行である'],
    answer:1,
    explanation:'シバン（shebang）行は「#!」に続いてインタープリタのパスを記述します。#!/bin/bashはbashシェルで実行することを示します。これにより./script.shと実行するだけで適切なシェルが自動選択されます。'
  },
  {
    level:'beginner', category:'サーバー基礎',
    question:'Webサーバーの主な役割は何ですか？',
    options:['データベースを管理する','クライアントからのHTTPリクエストを受け付けてレスポンスを返す','メールを送受信する','ファイルを暗号化する'],
    answer:1,
    explanation:'WebサーバーはクライアントブラウザからのHTTPリクエストを受け取り、HTMLファイルや画像などの静的コンテンツ、またはアプリケーションサーバーと連携して動的コンテンツをレスポンスとして返します。'
  },
  {
    level:'beginner', category:'サーバー基礎',
    question:'ファイアウォールの主な役割は何ですか？',
    options:['データを高速化する','不正なネットワーク通信をブロックする','ファイルを圧縮する','DNSを解決する'],
    answer:1,
    explanation:'ファイアウォールはネットワークトラフィックを監視し、設定したルール（ポート番号・IPアドレス等）に基づいて許可または拒否することで、不正アクセスやサイバー攻撃からシステムを保護します。'
  },
  {
    level:'beginner', category:'サーバー基礎',
    question:'SSHでサーバーに接続する際の「公開鍵・秘密鍵認証」について正しい説明はどれですか？',
    options:['公開鍵と秘密鍵は同じ内容のファイル','公開鍵をサーバーに登録し、秘密鍵はクライアントで保管する','秘密鍵をサーバーに登録し、公開鍵はクライアントで保管する','公開鍵も秘密鍵もサーバーに保管する'],
    answer:1,
    explanation:'SSH鍵認証では、公開鍵（~/.ssh/authorized_keys）をサーバーに登録し、秘密鍵をクライアント（自分のPC）に安全に保管します。接続時に秘密鍵で署名・公開鍵で検証することで認証します。パスワード認証より安全です。'
  },
  {
    level:'beginner', category:'ネットワーク',
    question:'NTP（Network Time Protocol）の役割は何ですか？',
    options:['ファイル転送','ネットワーク上の機器の時刻を同期する','名前解決','メール送信'],
    answer:1,
    explanation:'NTPはネットワーク上のコンピュータの時計を正確に同期するプロトコルです。ログの時刻一致・SSL証明書の有効期限確認・認証処理など、インフラ運用において正確な時刻は非常に重要です。'
  },
  {
    level:'beginner', category:'サーバー基礎',
    question:'「冗長化」とはどのような概念ですか？',
    options:['サーバーの処理速度を上げること','障害時でもサービスが継続できるよう予備システムを用意すること','データを圧縮すること','セキュリティを強化すること'],
    answer:1,
    explanation:'冗長化とは、機器や回線などを複数用意し、1つに障害が発生しても他で代替できるようにすることです。Webサーバーを複数台用意してロードバランサーで分散させるのが代表例です。'
  },
  {
    level:'beginner', category:'Linux',
    question:'環境変数の用途として正しいものはどれですか？',
    options:['CPU使用率を制御する','プロセスに渡すシステムの設定値やパスなどを格納する','ファイルのパーミッションを設定する','ネットワーク設定を保存する'],
    answer:1,
    explanation:'環境変数はプロセスの動作に影響を与えるキーと値のペアです。PATHにコマンドの検索パス、HOMEにホームディレクトリ、アプリではDBのパスワードやAPIキーを環境変数で渡すことがセキュリティ上のベストプラクティスです。'
  },
  {
    level:'beginner', category:'ネットワーク',
    question:'公開鍵暗号方式の説明として正しいものはどれですか？',
    options:['暗号化と復号に同じ鍵を使う方式','公開鍵で暗号化し、対応する秘密鍵でのみ復号できる方式','全ユーザーが同じ鍵を共有する方式','鍵を使わずに暗号化する方式'],
    answer:1,
    explanation:'公開鍵暗号方式では、公開鍵（誰でも入手可能）で暗号化し、対応する秘密鍵（持ち主だけが保有）でしか復号できません。SSH・HTTPS（TLS）・デジタル署名などに使われます。'
  },
  {
    level:'beginner', category:'サーバー基礎',
    question:'HTTPステータスコード「500」は何を意味しますか？',
    options:['リクエスト成功','リソースが見つからない','サーバー内部エラー','リダイレクト'],
    answer:2,
    explanation:'HTTPステータスコードは3桁の数字でレスポンスの状態を示します。2xx（成功）、3xx（リダイレクト）、4xx（クライアントエラー：404 Not Found等）、5xx（サーバーエラー：500 Internal Server Error等）です。'
  },

  // ══════════════════════════════
  //  中級（35問） — Webサーバー・コンテナ・クラウド・DB・セキュリティ
  // ══════════════════════════════
  {
    level:'intermediate', category:'Webサーバー',
    question:'nginxとApacheの違いとして正しいものはどれですか？',
    options:['ApacheはLinux専用、nginxはWindows専用','nginxはイベント駆動でメモリ効率が高く、Apacheはプロセス/スレッド駆動','nginxはデータベースサーバー、ApacheはWebサーバー','機能的な違いはない'],
    answer:1,
    explanation:'Apacheはリクエストごとにプロセスまたはスレッドを生成する方式で、nginxはイベント駆動・非同期方式です。nginxは多数の同時接続を少ないメモリで処理できるため、高トラフィックのサイトで有利です。'
  },
  {
    level:'intermediate', category:'Webサーバー',
    question:'リバースプロキシの役割として正しいものはどれですか？',
    options:['クライアントを代理してインターネットにアクセスする','クライアントからのリクエストをバックエンドサーバーに転送する','データを暗号化する専用サーバー','ファイルを配信する専用サーバー'],
    answer:1,
    explanation:'リバースプロキシはクライアントとバックエンドサーバーの間に位置し、外部からのリクエストを受け取って内部サーバーに転送します。ロードバランシング・SSL終端・キャッシュ・セキュリティ向上などの用途があります。'
  },
  {
    level:'intermediate', category:'Webサーバー',
    question:'nginxの設定でlocationブロックの役割は何ですか？',
    options:['サーバーのIPアドレスを指定する','リクエストURLのパスに基づいて処理を振り分ける','SSL証明書を設定する','サーバー名を定義する'],
    answer:1,
    explanation:'nginxのlocationブロックはリクエストURLのパス（/api/、/static/等）によって処理を分岐させます。例えば/api/へのリクエストはアプリサーバーに転送し、/images/はローカルのファイルを返すといった設定が可能です。'
  },
  {
    level:'intermediate', category:'コンテナ',
    question:'Dockerコンテナと仮想マシン（VM）の違いとして正しいものはどれですか？',
    options:['Dockerは物理サーバー上でのみ動作する','Dockerコンテナは同一OS上でプロセスとして動作し、VMは独自OSを持つ','VMはDockerより軽量で高速','両者は全く同じ技術'],
    answer:1,
    explanation:'VMはハイパーバイザー上にゲストOSごと動作するため重量級です。Dockerコンテナはホストカーネルを共有してプロセスとして動作するため軽量・高速起動・ポータブルです。ただしVMはより強力な分離を提供します。'
  },
  {
    level:'intermediate', category:'コンテナ',
    question:'Dockerfileの役割は何ですか？',
    options:['Dockerのネットワーク設定ファイル','Dockerイメージの作成手順を記述するファイル','Docker Composeの設定ファイル','Dockerのユーザー管理ファイル'],
    answer:1,
    explanation:'DockerfileにはDockerイメージを作成するための手順（ベースイメージ・依存パッケージインストール・ファイルコピー・起動コマンド等）を記述します。「docker build」コマンドでDockerfileを元にイメージが作られます。'
  },
  {
    level:'intermediate', category:'コンテナ',
    question:'Docker Composeの用途は何ですか？',
    options:['単一のDockerコンテナを管理する','複数のコンテナを定義・起動・管理する','DockerイメージをDockerHubに公開する','コンテナのセキュリティを設定する'],
    answer:1,
    explanation:'Docker ComposeはYAMLファイル（docker-compose.yml）で複数コンテナの構成を定義し、「docker compose up」一発で起動できます。Webサーバー・アプリサーバー・DBを組み合わせた開発環境の構築によく使われます。'
  },
  {
    level:'intermediate', category:'コンテナ',
    question:'DockerイメージとDockerコンテナの違いは何ですか？',
    options:['違いはない','イメージは設計図（静的）でコンテナはその実行中インスタンス（動的）','イメージは実行中、コンテナは停止中のもの','イメージはWindows用、コンテナはLinux用'],
    answer:1,
    explanation:'DockerイメージはコンテナのOSやアプリ構成を含む読み取り専用の「設計図（テンプレート）」です。コンテナはそのイメージを元に実際に起動した「実行中インスタンス」です。1つのイメージから複数のコンテナを起動できます。'
  },
  {
    level:'intermediate', category:'コンテナ',
    question:'Dockerの「ボリューム（Volume）」の役割は何ですか？',
    options:['コンテナのCPUを制限する','コンテナが削除されてもデータを永続化する','コンテナ間のネットワーク通信を管理する','イメージのサイズを圧縮する'],
    answer:1,
    explanation:'Dockerコンテナは削除するとデータが消えます。ボリュームはコンテナ外にデータを永続化するための仕組みで、コンテナを再作成してもデータが保持されます。データベースのデータや設定ファイルの永続化に使われます。'
  },
  {
    level:'intermediate', category:'クラウド',
    question:'IaaS・PaaS・SaaSの説明として正しいものはどれですか？',
    options:['IaaSはアプリ提供、PaaSはOS提供、SaaSはインフラ提供','IaaSはインフラ提供、PaaSは開発基盤提供、SaaSはアプリ提供','3つは同じ意味','IaaSは無料、PaaSとSaaSは有料'],
    answer:1,
    explanation:'IaaS（Infrastructure as a Service）はVM・ストレージ等のインフラをクラウドで提供（例:EC2）。PaaS（Platform）はアプリ開発基盤を提供。SaaS（Software）は完成したアプリを提供（例:Gmail）。'
  },
  {
    level:'intermediate', category:'クラウド',
    question:'スケールアウトとスケールアップの違いは何ですか？',
    options:['スケールアップはサーバーを追加し、スケールアウトはスペックを上げる','スケールアウトはサーバー台数を増やし、スケールアップはスペックを上げる','両者は同じ意味','スケールアウトはクラウド専用、スケールアップはオンプレ専用'],
    answer:1,
    explanation:'スケールアウト（水平スケーリング）はサーバーを複数台追加してシステム全体の処理能力を上げる方法。スケールアップ（垂直スケーリング）は既存サーバーのCPUやメモリを増強する方法。クラウドではスケールアウトが一般的です。'
  },
  {
    level:'intermediate', category:'クラウド',
    question:'AWS S3の主な用途は何ですか？',
    options:['仮想マシンの実行','オブジェクトストレージ（ファイルの保存・配信）','データベースの管理','DNS管理'],
    answer:1,
    explanation:'Amazon S3（Simple Storage Service）は容量無制限のオブジェクトストレージサービスです。Webサイトの静的コンテンツ配信・バックアップ・ログ保存・データ分析基盤など幅広く使われます。'
  },
  {
    level:'intermediate', category:'クラウド',
    question:'AWS EC2の「セキュリティグループ」の役割は何ですか？',
    options:['EC2インスタンスのスペックを定義する','インスタンスに対する仮想ファイアウォールとして通信を制御する','インスタンスのバックアップを管理する','DNSの設定をする'],
    answer:1,
    explanation:'セキュリティグループはEC2インスタンスへのインバウンド（受信）・アウトバウンド（送信）トラフィックをポート・プロトコル・IPアドレスのルールで制御する仮想ファイアウォールです。必要最小限のポートのみ開放するのがベストプラクティスです。'
  },
  {
    level:'intermediate', category:'クラウド',
    question:'オンプレミスとクラウドの違いとして正しいものはどれですか？',
    options:['オンプレミスはインターネット経由で使い、クラウドは自社で管理する','オンプレミスは自社設備で運用し、クラウドはサービスとして提供を受ける','両者は同じ意味','クラウドは常にオンプレミスより安価'],
    answer:1,
    explanation:'オンプレミスは自社または自社データセンターに物理サーバーを設置して管理する形態。クラウドはAWS・Azure・GCPなどが提供するインフラをインターネット経由で利用する形態。クラウドは初期投資不要・スケーラビリティが高いです。'
  },
  {
    level:'intermediate', category:'ネットワーク',
    question:'ロードバランサーの主な役割は何ですか？',
    options:['データを暗号化する','複数のサーバーにトラフィックを分散する','DNSを管理する','ファイルをキャッシュする'],
    answer:1,
    explanation:'ロードバランサーは受信したリクエストを複数のバックエンドサーバーに振り分け、特定のサーバーに負荷が集中しないようにします。可用性向上（1台障害でも他で継続）とパフォーマンス向上（負荷分散）が主なメリットです。'
  },
  {
    level:'intermediate', category:'ネットワーク',
    question:'CDN（Content Delivery Network）の主な役割は何ですか？',
    options:['ネットワークのセキュリティを強化する','世界中のサーバーにコンテンツをキャッシュしてユーザーへの配信を高速化する','データベースを分散する','メールを配信する'],
    answer:1,
    explanation:'CDNは世界中に分散したエッジサーバーにコンテンツをキャッシュし、ユーザーから最も近いサーバーから配信することで遅延を低減します。静的コンテンツ（画像・CSS・JS）の配信に特に効果的です。CloudflareやAWS CloudFrontが代表例です。'
  },
  {
    level:'intermediate', category:'ネットワーク',
    question:'VLANとは何ですか？',
    options:['仮想的なローカルエリアネットワークの分割技術','VPN（仮想プライベートネットワーク）の別名','クラウド上の仮想マシン','ロードバランサーの一種'],
    answer:0,
    explanation:'VLAN（Virtual LAN）は物理的なネットワーク機器を変えずに、論理的にLANを複数のグループに分割する技術です。業務部門ごとにネットワークを分けてセキュリティを高めたり、ブロードキャストを制限してネットワーク効率を上げたりします。'
  },
  {
    level:'intermediate', category:'ネットワーク',
    question:'NAT（Network Address Translation）の役割は何ですか？',
    options:['データを暗号化する','プライベートIPアドレスとパブリックIPアドレスを相互変換する','DNSを解決する','パケットをフィルタリングする'],
    answer:1,
    explanation:'NATはプライベートIPからインターネットへの通信時にパブリックIPに変換します。これにより1つのパブリックIPを複数のプライベートIPで共有でき、IPv4アドレス枯渇問題の緩和にも貢献しています。'
  },
  {
    level:'intermediate', category:'セキュリティ',
    question:'認証（Authentication）と認可（Authorization）の違いは何ですか？',
    options:['違いはない','認証は「誰か」を確認し、認可は「何ができるか」を制御する','認証は管理者専用、認可は一般ユーザー専用','認証はアプリ側、認可はOS側で行う'],
    answer:1,
    explanation:'認証（Authentication）は「あなたは誰ですか？」を確認するプロセス（ログイン等）。認可（Authorization）は「あなたは何をしてよいですか？」を制御するプロセス（権限確認等）。SSHでは鍵認証で「認証」し、sudoで「認可」します。'
  },
  {
    level:'intermediate', category:'セキュリティ',
    question:'SSL/TLS証明書の役割として正しいものはどれですか？',
    options:['サーバーの処理速度を上げる','通信の暗号化とサーバーの身元証明','ファイルをバックアップする','ユーザーのパスワードを管理する'],
    answer:1,
    explanation:'SSL/TLS証明書には「通信の暗号化（盗聴防止）」と「サーバーの身元証明（なりすまし防止）」の2つの役割があります。証明書は認証局（CA）が発行し、ブラウザはCAを信頼することでサーバーの正当性を確認します。'
  },
  {
    level:'intermediate', category:'セキュリティ',
    question:'「最小権限の原則」とは何ですか？',
    options:['管理者は常に全権限を持つべき','ユーザーやプロセスに必要最小限の権限のみ付与する','全ユーザーに同じ権限を与える','権限は自動で付与される'],
    answer:1,
    explanation:'最小権限の原則（Principle of Least Privilege）は、ユーザー・プロセス・システムに業務上必要な最小限の権限のみを与えるセキュリティの基本原則です。万一の侵害・誤操作時の被害を最小限に抑えられます。'
  },
  {
    level:'intermediate', category:'CI/CD',
    question:'CI（継続的インテグレーション）の主な目的は何ですか？',
    options:['サーバーを自動でスケールさせる','コードの変更を自動でビルド・テストし、問題を早期発見する','データベースを自動でバックアップする','コードを自動で難読化する'],
    answer:1,
    explanation:'CI（Continuous Integration）はコードの変更をリポジトリにプッシュするたびに自動でビルド・テストを実行し、問題を早期発見するプラクティスです。GitHub ActionsやJenkinsなどが代表的なCIツールです。'
  },
  {
    level:'intermediate', category:'CI/CD',
    question:'CD（継続的デリバリー/デプロイ）の説明として正しいものはどれですか？',
    options:['コードの差分を自動で検出する','テスト通過後のコードを自動で本番環境に反映する','コードをクラウドにバックアップする','データベースのマイグレーションを行う'],
    answer:1,
    explanation:'CD（Continuous Delivery/Deployment）はCIでテストを通過したコードを自動でステージング・本番環境にデプロイするプラクティスです。手動デプロイのミス防止・リリース頻度向上・フィードバックの高速化が目的です。'
  },
  {
    level:'intermediate', category:'CI/CD',
    question:'Infrastructure as Code（IaC）とは何ですか？',
    options:['インフラの物理機器をコードで制御する技術','インフラの構成をコードで記述・管理する手法','アプリケーションのコードをインフラ上で実行する','インフラのコストを自動計算する'],
    answer:1,
    explanation:'IaCはサーバー・ネットワーク・ストレージなどのインフラ構成をコード（設定ファイル）として記述し、バージョン管理・自動プロビジョニングを実現する手法です。TerraformやAnsibleが代表ツールです。再現性・一貫性・効率性が向上します。'
  },
  {
    level:'intermediate', category:'データベース',
    question:'RDBMSとは何ですか？',
    options:['リアルタイムデータブロードキャストシステム','テーブル形式でデータを管理するリレーショナルデータベース管理システム','分散ファイルシステム','バックアップ管理システム'],
    answer:1,
    explanation:'RDBMS（Relational Database Management System）はテーブル（表形式）でデータを管理し、テーブル間の関係（リレーション）を定義できるDBシステムです。MySQL・PostgreSQL・Oracle等が代表例で、SQLで操作します。'
  },
  {
    level:'intermediate', category:'データベース',
    question:'データベースのインデックスの役割は何ですか？',
    options:['データを暗号化する','検索クエリを高速化する','データの整合性を保証する','バックアップを自動化する'],
    answer:1,
    explanation:'インデックスは書籍の索引と同様、特定カラムの値から対応するレコードの場所を素早く見つけるためのデータ構造です。適切なインデックスはSELECT文の速度を劇的に向上させますが、INSERT/UPDATEは少し遅くなります。'
  },
  {
    level:'intermediate', category:'データベース',
    question:'データベースのトランザクションにおけるACID特性の「A（Atomicity）」の意味は何ですか？',
    options:['トランザクションは自動でバックアップされる','トランザクションは全て成功するか全て失敗するかのどちらか','トランザクションは他の処理と分離される','トランザクションはディスクに永続化される'],
    answer:1,
    explanation:'Atomicity（原子性）はトランザクション内の全操作が「全て完了」か「全てロールバック（なかったことに）」のどちらかになることを保証します。銀行振込で「引き落とし成功・入金失敗」という状態を防ぐための重要な性質です。'
  },
  {
    level:'intermediate', category:'データベース',
    question:'データベースのレプリケーションの主な目的は何ですか？',
    options:['データを暗号化する','可用性向上と読み取り性能向上のためにデータを複数の場所に複製する','データを圧縮する','クエリを最適化する'],
    answer:1,
    explanation:'レプリケーションはマスター（プライマリ）DBのデータをスレーブ（レプリカ）DBに複製する仕組みです。マスターが障害時にスレーブへ切り替え（高可用性）、読み取りをスレーブに分散（読み取り負荷分散）といった用途があります。'
  },
  {
    level:'intermediate', category:'監視',
    question:'ログとメトリクスの違いとして正しいものはどれですか？',
    options:['ログはエラーのみ記録し、メトリクスは全情報を記録する','ログはイベントを時系列に記録し、メトリクスは数値を時系列に集計する','両者は同じ意味','ログはアプリ用、メトリクスはOS用'],
    answer:1,
    explanation:'ログはシステム上で発生したイベント（エラー・アクセス・操作等）をテキストで記録します。メトリクスはCPU使用率・メモリ・リクエスト数などの数値データを一定間隔で収集・集計します。障害分析にはログ、トレンド把握・アラートにはメトリクスが向いています。'
  },
  {
    level:'intermediate', category:'Linux',
    question:'crontabの役割は何ですか？',
    options:['システムのログをローテーションする','定期的なジョブ（コマンド）を自動実行するスケジューラー','プロセスを監視する','ユーザーを作成する'],
    answer:1,
    explanation:'crontabはLinuxで特定の時刻や間隔でコマンドやスクリプトを自動実行するスケジューラーです。バックアップの自動実行・ログのローテーション・定期的な監視スクリプトの実行などに広く使われます。'
  },
  {
    level:'intermediate', category:'監視',
    question:'ヘルスチェックの目的は何ですか？',
    options:['サーバーの物理的な故障を修復する','サービスが正常に動作しているか定期的に確認する','データをバックアップする','セキュリティ脆弱性を検出する'],
    answer:1,
    explanation:'ヘルスチェックは対象のサービスが正常に動作しているかを定期的に自動確認する仕組みです。ロードバランサーはヘルスチェックに失敗したサーバーを自動的に切り離します。KubernetesのReadiness/Liveness Probeも同様の仕組みです。'
  },
  {
    level:'intermediate', category:'ネットワーク',
    question:'TCPの3ウェイハンドシェイクの順序として正しいものはどれですか？',
    options:['SYN → ACK → SYN-ACK','SYN → SYN-ACK → ACK','ACK → SYN → SYN-ACK','SYN-ACK → SYN → ACK'],
    answer:1,
    explanation:'TCP接続確立時の3ウェイハンドシェイクは①クライアントがSYN送信②サーバーがSYN-ACK返信③クライアントがACK送信の順です。これによりお互いの通信可能状態を確認してから通信を開始します。'
  },

  // ══════════════════════════════
  //  上級（25問） — Kubernetes・IaC・監視・高可用性・セキュリティ
  // ══════════════════════════════
  {
    level:'advanced', category:'Kubernetes',
    question:'Kubernetesの主な役割は何ですか？',
    options:['Dockerイメージのビルド','コンテナのオーケストレーション（デプロイ・スケーリング・管理の自動化）','ソースコードのバージョン管理','データベースのクラスタリング'],
    answer:1,
    explanation:'Kubernetes（K8s）はコンテナのオーケストレーションプラットフォームです。コンテナの自動デプロイ・スケーリング・自己修復（障害コンテナの自動再起動）・ロードバランシングなどを自動化します。大規模なコンテナ環境を効率的に管理できます。'
  },
  {
    level:'advanced', category:'Kubernetes',
    question:'KubernetesのPodとは何ですか？',
    options:['Kubernetes全体のクラスタ','1つ以上のコンテナをまとめたデプロイの最小単位','ネットワークポリシー','ストレージの抽象化'],
    answer:1,
    explanation:'PodはKubernetesのデプロイ可能な最小単位で、1つまたは複数のコンテナと共有のネットワーク・ストレージ名前空間を持ちます。同一Pod内のコンテナはlocalhostで通信できます。PodはDeploymentが管理します。'
  },
  {
    level:'advanced', category:'Kubernetes',
    question:'KubernetesのServiceの役割は何ですか？',
    options:['コンテナのビルド','Podへのアクセスを抽象化し安定したエンドポイントを提供する','ストレージを管理する','ユーザー権限を管理する'],
    answer:1,
    explanation:'PodのIPアドレスは再起動のたびに変わりますが、ServiceはPodへのアクセスを抽象化し、安定したIPアドレス/DNSを提供します。Service経由でアクセスすると、対象Podへのロードバランシングも自動で行われます。'
  },
  {
    level:'advanced', category:'Kubernetes',
    question:'Kubernetesのliveness probeとreadiness probeの違いは何ですか？',
    options:['違いはない','livenessはコンテナの生死確認（失敗で再起動）、readinessはトラフィック受付可否の確認','readinessは起動時のみ確認、livenessは定期確認','livenessはネットワーク確認、readinessはストレージ確認'],
    answer:1,
    explanation:'Liveness Probeは「コンテナが生きているか」を確認し、失敗するとコンテナを再起動します。Readiness Probeは「コンテナがトラフィックを受け付けられるか」を確認し、失敗するとServiceの転送先から除外します（コンテナは再起動しません）。'
  },
  {
    level:'advanced', category:'Kubernetes',
    question:'Kubernetesの「Namespace」の役割は何ですか？',
    options:['コンテナのネットワーク名前空間（Linux機能）のこと','クラスタ内でリソースを論理的に分割して管理する','ストレージのパーティション','ノード間の通信プロトコル'],
    answer:1,
    explanation:'KubernetesのNamespaceはクラスタ内を論理的に分割する仕組みです。開発・ステージング・本番環境を同一クラスタ内で分離したり、チームごとにリソースを分けたりするのに使います。'
  },
  {
    level:'advanced', category:'IaC',
    question:'TerraformとAnsibleの違いとして正しいものはどれですか？',
    options:['全く同じツール','Terraformはインフラのプロビジョニング、Ansibleは構成管理に主に使われる','AnsibleはAWS専用、TerraformはAzure専用','TerraformはPython製、AnsibleはGo製'],
    answer:1,
    explanation:'Terraform（HCL）はクラウドインフラ（VPC・EC2・RDS等）の「作成・変更・削除」に強く、宣言型で冪等性があります。Ansible（YAML）はサーバー内の「設定管理・ソフトウェアインストール・タスク実行」に強い。使い分けるか組み合わせることが多いです。'
  },
  {
    level:'advanced', category:'IaC',
    question:'Terraformにおける「state（状態ファイル）」の役割は何ですか？',
    options:['Terraformのバージョンを管理する','実際のインフラの現状を記録し、次回変更時の差分計算に使う','コードのバックアップ','ユーザー権限を管理する'],
    answer:1,
    explanation:'Terraform stateファイル（terraform.tfstate）は現在のインフラの状態を記録したJSONファイルです。次回terraform planを実行する際に、コードの定義と実際のインフラを比較して差分（追加・変更・削除）を計算するために使われます。'
  },
  {
    level:'advanced', category:'IaC',
    question:'Ansibleの「冪等性（べきとうせい）」の説明として正しいものはどれですか？',
    options:['処理が必ず失敗する性質','何度実行しても結果が同じになる性質','処理が1回しか実行できない性質','処理が並列実行される性質'],
    answer:1,
    explanation:'冪等性とは「同じ操作を何度繰り返しても結果が変わらない」性質です。Ansibleのタスクは冪等性を持つよう設計されており、例えば「nginxをインストール」は既にインストール済みなら何もしません。安全に何度でも実行でき、設定の収束が保証されます。'
  },
  {
    level:'advanced', category:'IaC',
    question:'GitOpsの説明として正しいものはどれですか？',
    options:['Gitのブランチ戦略','Gitリポジトリをインフラ・アプリの信頼できる唯一の情報源として自動デプロイを行う運用手法','Gitのセキュリティ設定','Gitを使ったコードレビュープロセス'],
    answer:1,
    explanation:'GitOpsはGitリポジトリを「Single Source of Truth（信頼できる唯一の情報源）」とし、リポジトリへの変更を自動でデプロイする運用手法です。Argo CDやFluxがKubernetes向けのGitOpsツールとして代表的です。'
  },
  {
    level:'advanced', category:'監視',
    question:'SLI・SLO・SLAの関係として正しいものはどれですか？',
    options:['全て同じ意味','SLIは指標、SLOは目標値、SLAは契約・合意','SLAは指標、SLIは目標値、SLOは契約','SLOは指標、SLIは目標値、SLAは測定方法'],
    answer:1,
    explanation:'SLI（Service Level Indicator）はサービスの品質を測る指標（可用性・レイテンシ等）。SLO（Objective）はSLIの目標値（例:可用性99.9%）。SLA（Agreement）はSLOを下回った場合のペナルティを含む顧客との合意・契約。SLOは内部目標、SLAは顧客との約束です。'
  },
  {
    level:'advanced', category:'監視',
    question:'Prometheusの説明として正しいものはどれですか？',
    options:['ログ収集・分析ツール','メトリクスの収集・保存・クエリに特化した監視システム','CI/CDパイプラインツール','コンテナレジストリ'],
    answer:1,
    explanation:'Prometheusはオープンソースの時系列メトリクス監視システムです。Pull方式でターゲットからメトリクスを収集し、PromQLでクエリできます。Grafanaと組み合わせてダッシュボードを構築し、AlertManagerでアラートを送信する構成が一般的です。'
  },
  {
    level:'advanced', category:'監視',
    question:'オブザーバビリティ（Observability）の三本柱として正しいものはどれですか？',
    options:['CPU・メモリ・ディスク','ログ・メトリクス・トレース','可用性・信頼性・保守性','監視・アラート・対応'],
    answer:1,
    explanation:'オブザーバビリティの三本柱は「ログ（何が起きたか）」「メトリクス（どのくらいの規模か）」「トレース（どのサービスを経由して処理されたか）」です。分散システムにおいて問題を素早く特定するために3つを組み合わせます。'
  },
  {
    level:'advanced', category:'監視',
    question:'アラートファティーグ（アラート疲れ）の説明として正しいものはどれですか？',
    options:['アラートシステムが古くなること','過剰・誤検知アラートで担当者が麻痺し重要アラートを見逃すこと','アラートの設定が複雑すぎること','アラートの送信先が多すぎること'],
    answer:1,
    explanation:'アラートファティーグは過剰なアラートや誤検知（ノイズ）が多すぎて担当者がアラートに慣れ（麻痺し）、本当に重要なアラートを見逃してしまう問題です。対策は適切なしきい値設定・アラートの優先度付け・根本原因の修正です。'
  },
  {
    level:'advanced', category:'高可用性',
    question:'RTO（Recovery Time Objective）とRPO（Recovery Point Objective）の説明として正しいものはどれですか？',
    options:['RTOはデータ損失許容量、RPOは復旧時間目標','RTOは許容できる最大復旧時間、RPOは許容できる最大データ損失量','両者は同じ意味','RTOはコスト目標、RPOはパフォーマンス目標'],
    answer:1,
    explanation:'RTO（Recovery Time Objective）は障害発生から復旧完了までに許容される最大時間（例:2時間以内）。RPO（Recovery Point Objective）は障害時に失ってよい最大データ量を時間で表したもの（例:1時間前のデータまで許容）。バックアップ戦略設計の基準です。'
  },
  {
    level:'advanced', category:'高可用性',
    question:'フェイルオーバーの説明として正しいものはどれですか？',
    options:['負荷を複数サーバーに分散する','プライマリ障害時に自動または手動でスタンバイへ切り替える','データを自動でバックアップする','サーバーのスペックを自動でアップする'],
    answer:1,
    explanation:'フェイルオーバーはプライマリ（稼働系）が障害になったとき、スタンバイ（待機系）が自動的に引き継ぐ仕組みです。自動フェイルオーバーはダウンタイムを最小化します。データベースクラスタ・ロードバランサー・DNSフェイルオーバーなどで実装されます。'
  },
  {
    level:'advanced', category:'高可用性',
    question:'カナリアデプロイの説明として正しいものはどれですか？',
    options:['全トラフィックを一度に新バージョンに切り替える','一部のトラフィックのみ新バージョンに流して影響を確認しながら段階的に移行する','旧バージョンと新バージョンを同時に稼働させ続ける','障害時のみ新バージョンに切り替える'],
    answer:1,
    explanation:'カナリアデプロイは、まず少量のトラフィック（1〜5%等）を新バージョンに流してエラー率・パフォーマンスを監視し、問題なければ段階的に割合を増やす手法です。本番リリースのリスクを最小化します。'
  },
  {
    level:'advanced', category:'高可用性',
    question:'ブルーグリーンデプロイの説明として正しいものはどれですか？',
    options:['サーバーを青と緑に色分けして管理する','現行（Blue）と新バージョン（Green）を同時稼働させ瞬時に切り替える','段階的にトラフィックを移行する','バックアップからの復元手法'],
    answer:1,
    explanation:'ブルーグリーンデプロイは現行（Blue）と新版（Green）の環境を同時に用意し、テスト完了後にロードバランサーやDNSで瞬時にトラフィックを切り替える手法です。切り替えが一瞬でダウンタイムほぼゼロ、問題時のロールバックも容易です。'
  },
  {
    level:'advanced', category:'セキュリティ',
    question:'多要素認証（MFA）の説明として正しいものはどれですか？',
    options:['複数のパスワードを設定する認証','複数の異なる種類の認証要素を組み合わせた認証','管理者のみが使える認証','バイオメトリクスのみを使った認証'],
    answer:1,
    explanation:'MFA（Multi-Factor Authentication）は「知識（パスワード）」「所持（スマートフォン）」「生体（指紋）」のうち2種類以上を組み合わせた認証です。パスワードが漏洩しても不正ログインを防げます。AWS IAMでも強く推奨されています。'
  },
  {
    level:'advanced', category:'セキュリティ',
    question:'コンテナのイミュータブルインフラストラクチャの考え方として正しいものはどれですか？',
    options:['一度構築したインフラは変更せず、変更時は新しく作り直す','インフラは頻繁に変更すべき','インフラの変更は手動で行うべき','インフラの設定はコード化すべきではない'],
    answer:0,
    explanation:'イミュータブル（不変）インフラとは、既存のサーバー/コンテナを変更（mutable）するのではなく、新しいイメージを作成してデプロイし直す考え方です。環境の一貫性・デプロイの信頼性向上・ロールバック容易性などのメリットがあります。'
  },
  {
    level:'advanced', category:'セキュリティ',
    question:'セキュリティグループとネットワークACL（AWS）の違いは何ですか？',
    options:['違いはない','セキュリティグループはインスタンスレベルでステートフル、ネットワークACLはサブネットレベルでステートレス','セキュリティグループはサブネット用、ネットワークACLはインスタンス用','ネットワークACLはセキュリティグループの上位互換'],
    answer:1,
    explanation:'セキュリティグループはEC2インスタンスに適用され、許可ルールのみでステートフル（戻りの通信を自動許可）。ネットワークACLはVPCサブネットに適用され、許可・拒否ルールを持ちステートレス（戻りの通信も明示的に許可が必要）。多層防御として両方使います。'
  },
  {
    level:'advanced', category:'ネットワーク',
    question:'BGPの説明として正しいものはどれですか？',
    options:['データを暗号化するプロトコル','インターネット上の自律システム間でルーティング情報を交換するプロトコル','IPアドレスを自動割り当てするプロトコル','メールを送受信するプロトコル'],
    answer:1,
    explanation:'BGP（Border Gateway Protocol）はインターネットの「経路制御プロトコル」で、ISP（インターネットサービスプロバイダ）間で経路情報を交換します。インターネットを構成する数万の自律システム（AS）間の通信を可能にする根幹プロトコルです。'
  },
  {
    level:'advanced', category:'Linux',
    question:'「/proc」ディレクトリの説明として正しいものはどれですか？',
    options:['プロセスの実行ファイルを格納するディレクトリ','実行中のカーネル・プロセス情報を仮想ファイルとして公開するディレクトリ','プログラムのソースコードを格納するディレクトリ','バックアッププロセスを管理するディレクトリ'],
    answer:1,
    explanation:'/procは仮想ファイルシステムで、ディスク上には存在しません。カーネルがプロセス情報・システム情報をファイルとして見せています。cat /proc/cpuinfoでCPU情報、cat /proc/meminfoでメモリ情報を確認できます。'
  },
  {
    level:'advanced', category:'セキュリティ',
    question:'SQLインジェクションの仕組みとして正しいものはどれですか？',
    options:['サーバーに大量のリクエストを送りサービスを停止させる','入力フォームに悪意のあるSQLを挿入しDBを不正操作する','パスワードを総当たりで試みる','通信を盗聴して情報を取得する'],
    answer:1,
    explanation:'SQLインジェクションはWebアプリの入力値をそのままSQLクエリに組み込む脆弱性を突き、悪意あるSQLを実行させる攻撃です。対策はプリペアドステートメント（パラメータ化クエリ）の使用・入力値のバリデーション・WAF導入です。'
  },

  // ══════════════════════════════
  //  プロ（20問） — アーキテクチャ・SRE・高度なKubernetes・セキュリティ
  // ══════════════════════════════
  {
    level:'pro', category:'アーキテクチャ',
    question:'マイクロサービスアーキテクチャの説明として正しいものはどれですか？',
    options:['1つのサーバーに全機能を集約する','機能ごとに独立したサービスに分割し、APIで連携する','データベースを複数に分散する','フロントエンドとバックエンドを分離する'],
    answer:1,
    explanation:'マイクロサービスは「ユーザー管理」「注文」「決済」などの機能を小さな独立サービスに分割し、API（REST/gRPC等）で連携する設計です。チームが独立して開発・デプロイ・スケールでき、障害の影響範囲を局所化できます。一方、分散システムの複雑さが増します。'
  },
  {
    level:'pro', category:'アーキテクチャ',
    question:'サービスメッシュの説明として正しいものはどれですか？',
    options:['Webサービスのメニュー一覧','マイクロサービス間の通信を管理するインフラ層','DNSの分散管理システム','CDNの一種'],
    answer:1,
    explanation:'サービスメッシュはマイクロサービス間の通信をサイドカープロキシ（Envoy等）で制御するインフラ層で、mTLS認証・トラフィック制御・サーキットブレーカー・オブザーバビリティをアプリコードから分離して提供します。IstioやLinkerdが代表的な実装です。'
  },
  {
    level:'pro', category:'アーキテクチャ',
    question:'サーキットブレーカーパターンの説明として正しいものはどれですか？',
    options:['電源の安全装置','依存サービス障害時に連鎖的な障害を防ぐため、リクエストを一時的に遮断するパターン','ネットワークを物理的に切断する','自動フェイルオーバーのこと'],
    answer:1,
    explanation:'マイクロサービスでサービスAがBを呼び出す際、Bが障害でタイムアウトが続くとA も詰まり連鎖障害（カスケード障害）が起きます。サーキットブレーカーはエラー率が閾値を超えると回路を「オープン」にし、Bへのリクエストを即座に失敗させてシステム全体を保護します。'
  },
  {
    level:'pro', category:'アーキテクチャ',
    question:'イベント駆動アーキテクチャにおけるメッセージキューの役割として正しいものはどれですか？',
    options:['データベースの一種','サービス間の非同期通信を仲介しシステムを疎結合にする','ロードバランサーの一種','APIゲートウェイの別名'],
    answer:1,
    explanation:'メッセージキュー（AWS SQS・RabbitMQ・Kafka等）はプロデューサー（送信）とコンシューマー（受信）の間にメッセージを蓄える仲介役です。非同期処理によりサービス間を疎結合にし、片方が遅延・障害でも影響を緩和します。'
  },
  {
    level:'pro', category:'アーキテクチャ',
    question:'「12ファクターアプリ」の考え方として最も正確なものはどれですか？',
    options:['アプリは必ず12個のサービスに分割する','設定を環境変数で管理するなどクラウドネイティブなアプリ開発の12の指針','12台のサーバーで冗長化する','12のセキュリティ基準を満たす'],
    answer:1,
    explanation:'12ファクターアプリはHerokuが定義したクラウドネイティブアプリ開発の12の原則です。主なものに「設定を環境変数で管理」「バックエンドサービスをアタッチされたリソースとして扱う」「ステートレスなプロセス」「ログをイベントストリームとして扱う」などがあります。'
  },
  {
    level:'pro', category:'SRE',
    question:'SRE（Site Reliability Engineering）のエラーバジェットの説明として正しいものはどれですか？',
    options:['システムのエラー件数の上限','SLOを超えて許容できる「ダウン時間・エラー率の余裕」','開発チームのバグ許容量','コストの予算'],
    answer:1,
    explanation:'エラーバジェットはSLOを達成するために「使える失敗の許容量」です。例えばSLO 99.9%なら月0.1%（約44分）がエラーバジェット。バジェットが残っている間は積極的なリリースを行い、消費し始めると安定性重視にシフトします。'
  },
  {
    level:'pro', category:'SRE',
    question:'「トイル（Toil）」の定義として正しいものはどれですか？',
    options:['チームのモチベーションを下げる作業','自動化可能で繰り返し行われる手作業で、サービスを維持するためだけに行う作業','バグ修正の作業','ドキュメント作成'],
    answer:1,
    explanation:'トイルはSREが定義する概念で「手作業・繰り返し・自動化可能・戦術的・恒久的な価値を生まない」性質を持つ作業です。例: 毎週手動で行うバックアップ確認・手作業デプロイ等。SREはトイルを50%未満に保つべきとされています。'
  },
  {
    level:'pro', category:'SRE',
    question:'ポストモーテム（事後分析）のベストプラクティスとして正しいものはどれですか？',
    options:['障害を起こした担当者を特定して責任を追及する','犯人探しではなく根本原因を特定し再発防止策を導き出す「無責の文化」','障害の事実を外部に公開しない','障害が小さければポストモーテムは不要'],
    answer:1,
    explanation:'ポストモーテムは障害後に「何が起きたか・なぜ起きたか・どう防ぐか」を分析するプロセスです。SREでは「無責のポストモーテム（Blameless Post-mortem）」が重要で、個人を責めずシステム・プロセスの問題として捉え、組織的な改善につなげます。'
  },
  {
    level:'pro', category:'SRE',
    question:'カオスエンジニアリングの目的として正しいものはどれですか？',
    options:['意図的に障害を発生させシステムの耐障害性を確認・改善する','ランダムにコードを変更してテストする','チームの混乱耐性を鍛える','システムに意図的なバグを仕込む'],
    answer:0,
    explanation:'カオスエンジニアリングは本番または本番同等環境で意図的に障害（ネットワーク遅延・インスタンス停止・CPU負荷等）を注入し、システムが想定通りに耐えられるかを検証するプラクティスです。Netflixが提唱しChaos Monkeyを開発したことで有名です。'
  },
  {
    level:'pro', category:'Kubernetes',
    question:'Helmの説明として正しいものはどれですか？',
    options:['Kubernetesのコンテナランタイム','KubernetesアプリのパッケージマネージャーでChartでアプリを管理する','Kubernetesのモニタリングツール','Kubernetesのストレージ管理ツール'],
    answer:1,
    explanation:'HelmはKubernetesの「パッケージマネージャー」です。アプリのK8sマニフェスト群を「Chart」としてパッケージ化・バージョン管理・共有できます。helm install/upgradeで環境変数（values.yaml）を変えながら同一Chartを複数環境にデプロイできます。'
  },
  {
    level:'pro', category:'Kubernetes',
    question:'Kubernetes HPA（Horizontal Pod Autoscaler）の説明として正しいものはどれですか？',
    options:['ノード（サーバー）を自動でスケールする','CPUやカスタムメトリクスに基づいてPodのレプリカ数を自動調整する','Podのリソース制限を自動設定する','Namespaceを自動で作成する'],
    answer:1,
    explanation:'HPAはCPU使用率・メモリ・カスタムメトリクスに基づいてDeploymentのPod数を自動で増減します。トラフィック増加時に自動スケールアウト、減少時にスケールインします。ノード自体のスケールにはCA（Cluster Autoscaler）を使います。'
  },
  {
    level:'pro', category:'Kubernetes',
    question:'Kubernetes PDB（Pod Disruption Budget）の説明として正しいものはどれですか？',
    options:['Podのコスト予算','ノードメンテナンス等でPodが削除される際に最低稼働数を保証する設定','Podのリソース使用量制限','Podのログ保存設定'],
    answer:1,
    explanation:'PDB（Pod Disruption Budget）はノードのdrainやアップグレード等の「計画的な停止（Voluntary Disruption）」時に、常に最低限のPod数またはパーセンテージが稼働し続けることを保証します。本番環境での無停止メンテナンスに重要な設定です。'
  },
  {
    level:'pro', category:'セキュリティ',
    question:'ゼロトラストセキュリティの基本概念として正しいものはどれですか？',
    options:['社内ネットワークは安全と見なし信頼する','「常に疑い、常に検証する」─ネットワーク位置に関わらず全リクエストを検証する','ファイアウォールで全て防げると考える','ユーザー認証は不要と考える'],
    answer:1,
    explanation:'ゼロトラストは「社内ネットワーク＝安全」という前提を捨て、すべてのアクセスを場所・デバイスに関わらず検証する考え方です。「暗黙の信頼なし」がキーワード。実装要素はIDaaS（認証）・EDR（端末管理）・SASE・最小権限アクセスなどです。'
  },
  {
    level:'pro', category:'セキュリティ',
    question:'RBAC（Role-Based Access Control）の説明として正しいものはどれですか？',
    options:['IPアドレスに基づいてアクセスを制御する','ユーザーにロールを割り当て、ロールに権限を設定してアクセスを制御する','パスワードの強度に基づいてアクセスを制御する','アクセス時刻に基づいてアクセスを制御する'],
    answer:1,
    explanation:'RBAC（役割ベースアクセス制御）はユーザー個人ではなく「ロール（役割）」に権限を付与し、ユーザーにロールを割り当てる方式です。管理が簡素化され、人事異動時のアクセス権変更も容易になります。AWS IAM・Kubernetes RBAC・データベースで広く採用されています。'
  },
  {
    level:'pro', category:'セキュリティ',
    question:'シークレット管理のベストプラクティスとして正しいものはどれですか？',
    options:['パスワードをソースコードに直接記述する','Vault・AWS Secrets Manager等の専用ツールで一元管理・自動ローテーションする','パスワードをテキストファイルに保存する','全員が同じパスワードを共有する'],
    answer:1,
    explanation:'APIキー・パスワード・証明書等のシークレットはソースコードやGitに含めてはいけません（漏洩リスク）。HashiCorp Vault・AWS Secrets Manager・GCP Secret Manager等の専用ツールで一元管理し、定期的な自動ローテーション・アクセスログ・最小権限アクセスを実現するのがベストプラクティスです。'
  },
  {
    level:'pro', category:'セキュリティ',
    question:'SBOM（Software Bill of Materials）の説明として正しいものはどれですか？',
    options:['ソフトウェアの予算書','ソフトウェアを構成するコンポーネント・依存関係の一覧（材料表）','ソフトウェアのテスト仕様書','ソフトウェアのデプロイ手順書'],
    answer:1,
    explanation:'SBOMはソフトウェアの「部品表」で、アプリを構成する全ライブラリ・フレームワークのバージョンと依存関係を記録します。脆弱性（CVE）発覚時に「自社システムが影響を受けるか？」を素早く確認できます。サプライチェーンセキュリティの観点で重要性が高まっています。'
  },
  {
    level:'pro', category:'IaC',
    question:'Terraform Cloudや「リモートstate」を使うメリットとして正しいものはどれですか？',
    options:['コードを自動でコンパイルする','stateファイルの共有・ロック・バージョン管理でチーム作業の整合性を保つ','Terraformの実行速度を向上させる','GUIでインフラを管理できる'],
    answer:1,
    explanation:'ローカルstateはチームで共有できず競合が起きます。リモートstate（S3+DynamoDB、Terraform Cloud等）を使うと複数人での安全な共有・stateロック（同時実行防止）・バージョン履歴管理が可能になります。本番インフラのIaCではリモートstateが必須です。'
  },
  {
    level:'pro', category:'IaC',
    question:'「ドリフト検出」の説明として正しいものはどれですか？',
    options:['ネットワーク遅延の検出','IaCコードと実際のインフラの状態のずれを検出・修正すること','コードの品質劣化の検出','データベースの同期ずれの検出'],
    answer:1,
    explanation:'コンフィグドリフトはIaCで管理されているインフラが手動変更等によりコード定義と乖離している状態です。terraform planやAWS Config等でドリフトを定期検出し修正することで、インフラの一貫性を保ちます。'
  },
  {
    level:'pro', category:'監視',
    question:'分散トレーシングの説明として正しいものはどれですか？',
    options:['単一サーバーのログを追跡する','マイクロサービス間でのリクエストの流れを追跡し、遅延やエラーの発生箇所を特定する','ネットワークパケットを追跡する','Gitのコミット履歴を追跡する'],
    answer:1,
    explanation:'マイクロサービスではリクエストが複数サービスを経由するため、問題の特定が困難です。分散トレーシングはリクエストに一意のTrace IDを付与し、各サービスでのSpan（処理時間）を収集して可視化します。JaegerやZipkin、AWS X-Rayが代表ツールです。'
  },
  {
    level:'pro', category:'アーキテクチャ',
    question:'「CQRS（Command Query Responsibility Segregation）パターン」の説明として正しいものはどれですか？',
    options:['クラウドのコスト最適化手法','読み取り（Query）と書き込み（Command）のモデルを分離するアーキテクチャパターン','CI/CDのパイプライン設計パターン','データベースのシャーディング手法'],
    answer:1,
    explanation:'CQRSは読み取り（Query）と書き込み（Command）のデータモデルを分離するパターンです。書き込み側は正規化されたモデル、読み取り側はクエリに最適化された非正規化モデルを持ちます。読み取りと書き込みのスケーリング要件が異なる場合に有効です。'
  },
];

// ─────────────────────────────
// アプリ状態
// ─────────────────────────────
const state = {
  mode: 'all',
  questions: [],
  current: 0,
  score: 0,
  wrong: [],
  answered: false,
  breakdown: { beginner:[], intermediate:[], advanced:[], pro:[] },
};

const LEVEL_LABELS = { beginner:'初級', intermediate:'中級', advanced:'上級', pro:'プロ' };
const LEVEL_CLASS  = { beginner:'lv-beginner', intermediate:'lv-intermediate', advanced:'lv-advanced', pro:'lv-pro' };

// ─────────────────────────────
// 画面制御
// ─────────────────────────────
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

// ─────────────────────────────
// シャッフル
// ─────────────────────────────
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ─────────────────────────────
// クイズ開始
// ─────────────────────────────
function startQuiz(mode) {
  state.mode = mode;
  state.questions = shuffle(
    mode === 'all' ? QUESTIONS : QUESTIONS.filter(q => q.level === mode)
  );
  state.current = 0;
  state.score = 0;
  state.wrong = [];
  state.breakdown = { beginner:[], intermediate:[], advanced:[], pro:[] };
  showScreen('screen-quiz');
  renderQuestion();
}

// ─────────────────────────────
// 問題を描画
// ─────────────────────────────
function renderQuestion() {
  const q = state.questions[state.current];
  state.answered = false;

  // カテゴリ・レベル
  document.getElementById('qCategory').textContent = q.category;
  const lvEl = document.getElementById('qLevel');
  lvEl.textContent = LEVEL_LABELS[q.level];
  lvEl.className = `q-level ${LEVEL_CLASS[q.level]}`;

  // 進捗
  const total = state.questions.length;
  const num   = state.current + 1;
  document.getElementById('qProgress').textContent = `${num} / ${total}`;
  document.getElementById('progressBar').style.width = `${(num / total) * 100}%`;

  // 問題文
  document.getElementById('questionText').textContent = q.question;

  // 選択肢
  const opts = document.getElementById('options');
  opts.innerHTML = '';
  const labels = ['A', 'B', 'C', 'D'];
  q.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.innerHTML = `<span class="option-label">${labels[i]}</span><span>${opt}</span>`;
    btn.addEventListener('click', () => selectAnswer(i));
    opts.appendChild(btn);
  });

  // 解説非表示
  const expBox = document.getElementById('explanationBox');
  expBox.classList.add('hidden');
}

// ─────────────────────────────
// 解答選択
// ─────────────────────────────
function selectAnswer(idx) {
  if (state.answered) return;
  state.answered = true;

  const q    = state.questions[state.current];
  const btns = document.querySelectorAll('.option-btn');

  btns.forEach((btn, i) => {
    btn.disabled = true;
    if (i === q.answer) btn.classList.add('correct');
    else if (i === idx && i !== q.answer) btn.classList.add('wrong');
  });

  const correct = idx === q.answer;
  if (correct) {
    state.score++;
    state.breakdown[q.level].push(true);
  } else {
    state.wrong.push({ q, chosen: idx });
    state.breakdown[q.level].push(false);
  }

  // 解説表示
  const expBox  = document.getElementById('explanationBox');
  const icon    = document.getElementById('resultIcon');
  const text    = document.getElementById('resultText');
  const expText = document.getElementById('explanationText');

  if (correct) {
    icon.textContent = '✅';
    text.textContent = '正解！';
    text.className = 'result-text correct-text';
  } else {
    icon.textContent = '❌';
    text.textContent = `不正解 — 正解は「${q.options[q.answer]}」`;
    text.className = 'result-text wrong-text';
  }
  expText.textContent = q.explanation;
  expBox.classList.remove('hidden');
}

// ─────────────────────────────
// 次の問題 / 結果へ
// ─────────────────────────────
document.getElementById('btnNext').addEventListener('click', () => {
  state.current++;
  if (state.current < state.questions.length) {
    renderQuestion();
  } else {
    showResult();
  }
});

// ─────────────────────────────
// 結果表示
// ─────────────────────────────
function showResult() {
  showScreen('screen-result');

  const total   = state.questions.length;
  const score   = state.score;
  const pct     = Math.round((score / total) * 100);

  // 評価
  let emoji, title, msg;
  if (pct === 100) {
    emoji = '🏆'; title = '完璧！プロレベル達成';
    msg   = '全問正解です！インフラエンジニアとしての知識が完全に身についています。';
  } else if (pct >= 80) {
    emoji = '🎯'; title = '素晴らしい！上級レベル';
    msg   = '高いレベルの知識が身についています。苦手分野の復習で更なる高みへ。';
  } else if (pct >= 60) {
    emoji = '📈'; title = '好調！中級レベル';
    msg   = '基礎はしっかりしています。上級・プロの問題に挑戦しながら知識を深めましょう。';
  } else if (pct >= 40) {
    emoji = '📚'; title = '成長中！初中級レベル';
    msg   = '基礎知識の習得が進んでいます。間違えた問題の解説をよく読んで復習しましょう。';
  } else {
    emoji = '🌱'; title = 'これからが楽しみ！';
    msg   = '学習の第一歩を踏み出しました。解説を熟読しながら基礎から積み上げていきましょう。';
  }

  document.getElementById('resultEmoji').textContent   = emoji;
  document.getElementById('resultTitle').textContent   = title;
  document.getElementById('scoreDisplay').innerHTML    = `${score}<span> / ${total}問正解 (${pct}%)</span>`;
  document.getElementById('resultMessage').textContent = msg;

  // レベル別内訳
  const bd = document.getElementById('levelBreakdown');
  bd.innerHTML = '';
  Object.entries(state.breakdown).forEach(([lv, results]) => {
    if (!results.length) return;
    const c = results.filter(Boolean).length;
    const div = document.createElement('div');
    div.className = 'breakdown-item';
    div.innerHTML = `<div class="breakdown-label">${LEVEL_LABELS[lv]}</div>
                     <div class="breakdown-score">${c} / ${results.length}</div>`;
    bd.appendChild(div);
  });

  // 間違いがない場合はボタン非表示
  document.getElementById('btnReview').style.display =
    state.wrong.length ? 'block' : 'none';
}

// ─────────────────────────────
// 復習表示
// ─────────────────────────────
document.getElementById('btnReview').addEventListener('click', () => {
  showScreen('screen-review');
  const list = document.getElementById('reviewList');
  list.innerHTML = '';
  const labels = ['A', 'B', 'C', 'D'];

  state.wrong.forEach(({ q, chosen }, idx) => {
    const div = document.createElement('div');
    div.className = 'review-item';

    const optHtml = q.options.map((opt, i) => {
      let cls = 'neutral';
      if (i === q.answer)         cls = 'correct';
      else if (i === chosen)      cls = 'wrong';
      return `<div class="review-option ${cls}">
                <span>${labels[i]}.</span><span>${opt}</span>
              </div>`;
    }).join('');

    div.innerHTML = `
      <div class="review-meta">
        <span class="review-num">Q${idx + 1}</span>
        <span class="q-category">${q.category}</span>
        <span class="q-level ${LEVEL_CLASS[q.level]}">${LEVEL_LABELS[q.level]}</span>
      </div>
      <p class="review-question">${q.question}</p>
      <div class="review-answers">${optHtml}</div>
      <p class="review-explanation">${q.explanation}</p>
    `;
    list.appendChild(div);
  });
});

document.getElementById('btnBackResult').addEventListener('click', () => showScreen('screen-result'));
document.getElementById('btnRestart').addEventListener('click',    () => showScreen('screen-start'));

// ─────────────────────────────
// スタート画面のボタン
// ─────────────────────────────
document.querySelectorAll('.level-btn').forEach(btn => {
  btn.addEventListener('click', () => startQuiz(btn.dataset.mode));
});
