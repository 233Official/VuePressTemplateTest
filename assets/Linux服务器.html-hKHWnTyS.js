import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as e,b as t,o as a}from"./app-D0TqJp38.js";const n={};function l(h,i){return a(),e("div",null,i[0]||(i[0]=[t(`<h1 id="linux服务器" tabindex="-1"><a class="header-anchor" href="#linux服务器"><span>Linux服务器</span></a></h1><ul><li><a href="#linux%E6%9C%8D%E5%8A%A1%E5%99%A8">Linux服务器</a><ul><li><a href="#%E8%BF%9C%E7%A8%8B%E8%BF%9E%E6%8E%A5%E6%9C%8D%E5%8A%A1%E5%99%A8">远程连接服务器</a><ul><li><a href="#remote-ssh">remote-SSH</a></li></ul></li><li><a href="#%E6%96%87%E4%BB%B6%E4%B8%8B%E8%BD%BD">文件下载</a></li><li><a href="#%E8%85%BE%E8%AE%AF%E4%BA%91%E8%BD%BB%E9%87%8F">腾讯云轻量</a><ul><li><a href="#%E5%86%85%E7%BD%91-dns">内网 DNS</a></li><li><a href="#%E4%BD%BF%E7%94%A8%E5%AF%86%E9%92%A5%E7%99%BB%E5%BD%95%E5%88%B0-root-%E8%B4%A6%E6%88%B7">使用密钥登录到 root 账户</a></li></ul></li><li><a href="#%E6%8E%A2%E9%92%88">探针</a></li></ul></li></ul><hr><h2 id="远程连接服务器" tabindex="-1"><a class="header-anchor" href="#远程连接服务器"><span>远程连接服务器</span></a></h2><hr><h3 id="remote-ssh" tabindex="-1"><a class="header-anchor" href="#remote-ssh"><span>remote-SSH</span></a></h3><p>先在控制台生成并绑定密钥(本地密钥妥善保管), 然后再重置 <code>root</code> 密码</p><blockquote><p><img src="http://cdn.ayusummer233.top/img/20211122113415.png" alt="20211122113415"> &gt; <img src="http://cdn.ayusummer233.top/img/20211122113543.png" alt="20211122113543"></p></blockquote><blockquote><p><a href="https://cloud.tencent.com/document/product/1207/44575" target="_blank" rel="noopener noreferrer">轻量应用服务器 重置密码 - 操作指南 - 文档中心 - 腾讯云 (tencent.com)</a></p></blockquote><p>打开 VSCode Remote-SSH 插件配置项</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Host</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Ubuntu</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    HostName</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 公网ip</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    User</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ubuntu</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    IdentityFile</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;本地密钥路径&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Host</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> CentOS</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    HostName</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 公网ip</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    User</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> root</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    IdentityFile</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;本地密钥路径&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>腾讯云轻量的 ubuntu 默认禁用 root 用户名通过密码方式登录实例, 如需开启请参考 <a href="https://cloud.tencent.com/document/product/1207/44569#ubuntu-.E7.B3.BB.E7.BB.9F.E5.A6.82.E4.BD.95.E4.BD.BF.E7.94.A8-root-.E7.94.A8.E6.88.B7.E7.99.BB.E5.BD.95.E5.AE.9E.E4.BE.8B.EF.BC.9F" target="_blank" rel="noopener noreferrer">Ubuntu 系统如何使用 root 用户登录实例？</a><ul><li>腾讯云启用 root 密码登录后将 <code>remote-ssh</code> 配置项中对应 <code>User</code> 改为 <code>root</code> 后进行远程连接即可使用 <code>root 密码</code> 登录到服务器</li><li><code>CentOS</code> 的话直接使用 <code>root</code> 和 <code>密钥</code> 的配置就可以自动登录到 <code>root 账户</code></li><li>由于<code>腾讯云(ubuntu)</code>绑定密钥默认绑定在 <code>ubuntu</code> 用户下, 因此腾讯云使用 <code>root + 密钥</code> 的形式登录 <code>root</code> 账户需要将密钥拷贝到 <code>root</code> 账户配置下即可:<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">cat</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /home/ubuntu/.ssh/authorized_keys</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &gt; </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">/root/.ssh/authorized_keys</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><blockquote><p><a href="https://blog.csdn.net/weixin_39591031/article/details/118700963" target="_blank" rel="noopener noreferrer">腾讯云 密钥直接登录 root_Xav Pun 的博客-CSDN 博客</a></p></blockquote></li></ul></li><li><code>阿里云</code> 和 <code>UCLOUD</code> 默认是支持 <code>root + 密钥</code>登录的</li></ul><blockquote><p><a href="https://www.cnblogs.com/peida/archive/2012/10/30/2746968.html" target="_blank" rel="noopener noreferrer">每天一个 linux 命令(10) ：cat 命令 - peida - 博客园 (cnblogs.com)</a></p><ul><li><p>显示文件内容 <code>cat [filename]</code></p><p><img src="http://cdn.ayusummer233.top/img/202111231103098.png" alt="image-20211123110321948"></p></li><li><p>创建一个文件 <code>cat &gt; [filename]</code></p><p><img src="http://cdn.ayusummer233.top/img/202111231111636.png" alt="image-20211123111154541"></p></li><li><p>将若干个文件合并为一个文件: <code>cat file1 file2 &gt; file</code></p><p><img src="http://cdn.ayusummer233.top/img/202111231113303.png" alt="image-20211123111347216"></p></li></ul></blockquote><hr><h2 id="文件下载" tabindex="-1"><a class="header-anchor" href="#文件下载"><span>文件下载</span></a></h2><ul><li><code>VSCode</code> 连接到服务器确实可以在左栏 <code>资源管理器</code> 处选择文件(夹)右键下载, 不过服务器带宽小的话很容易断连</li><li><code>Xshell + Xftp</code> 正版要付费且没必要为了下载个文件就多装一个软件专门做这件事</li><li>所以考虑直接使用 <code>Linux scp 命令</code> 进行下载</li></ul><p><code>scp</code> 命令无法识别 <code>Windows 目录</code>, 所以要采用一些方式来将 <code>Windows 目录</code> 转化成 <code>Linux 目录</code>,<code>WSL</code> 可以做到这点</p><p><code>Windows + X</code> 打开 <code>Windows 终端</code>, 随便选择安装了的一个 <code>ubuntu 发行版</code> 进入后可以看到当前命令行所在目录 <code>/mnt/c/Users/233</code>, 对应 <code>Windows</code> 的 <code>C:/Users/233 目录</code></p><p><img src="http://cdn.ayusummer233.top/img/202111011032910.png" alt="image-20211101103247697"></p><p>然后使用如下命令将服务器文件下载到本地:</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">scp</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [user]@[ip]:[Linux 服务器上目标文件的路径] [指定下载到windows本地的路径]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><img src="http://cdn.ayusummer233.top/img/202111011043258.png" alt="image-20211101104310152"></p><p><img src="http://cdn.ayusummer233.top/img/202111011043774.png" alt="image-20211101104334687"></p><p>下载文件夹:</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">scp</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -r</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [user]@[ip]:[Linux 服务器上目标文件的路径] [指定下载到windows本地的路径]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><img src="http://cdn.ayusummer233.top/img/202111011045617.png" alt="image-20211101104510504"></p><p><img src="http://cdn.ayusummer233.top/img/202111011046461.png" alt="image-20211101104630367"></p><blockquote><p><a href="https://blog.csdn.net/fakerswe/article/details/103178542" target="_blank" rel="noopener noreferrer">一说 git bash 可以</a>, 不过我拿 <code>git bash</code> 用 <code>ssh 命令</code> 连接服务器总是被拒绝连接</p></blockquote><hr><h2 id="腾讯云轻量" tabindex="-1"><a class="header-anchor" href="#腾讯云轻量"><span>腾讯云轻量</span></a></h2><hr><p><a href="https://cloud.tencent.com/act/new?from=14615" target="_blank" rel="noopener noreferrer">云产品首单秒杀<em>云服务器秒杀</em>云数据库秒杀 - 腾讯云 (tencent.com)</a>[PS: 2C4G 轻量首年 74]</p><hr><h3 id="内网-dns" tabindex="-1"><a class="header-anchor" href="#内网-dns"><span>内网 DNS</span></a></h3><ul><li><p>yum 命令报错: <code>Could not resolve host: mirrors.tencentyun.com; Unknown error</code></p><p><a href="https://blog.csdn.net/user2025/article/details/107733068" target="_blank" rel="noopener noreferrer">Could not resolve host: mirrors.tencentyun.com_user2025 的博客-CSDN 博客</a></p><p>原因：腾讯云服务器内网 yum 源的域名 mirrors.tencentyun.com 需要有内网的 DNS 才能访问，但是实际情况下，我们会根据需要修改 DNS，为了使用腾讯云内网快速稳定的内网源，我们需要把 DNS 恢复为内网 DNS，下面为各地区服务器 DNS 地址 解决办法： (1) 修改服务器的 DNS 配置文件：<code>/etc/resolv.conf</code> ，请参阅如下文档添加对应地区的内网 DNS 服务器</p><p><a href="https://cloud.tencent.com/document/product/213/5225" target="_blank" rel="noopener noreferrer">云服务器 内网服务 - 产品简介 - 文档中心 - 腾讯云 (tencent.com)</a></p><blockquote><p>我用的上海地域的轻量, 配上海或者上海金融的 DNS 都不对, 最后无奈重置实例才发现原来应该配最后一个所有地域的那个 DNS</p><p><img src="http://cdn.ayusummer233.top/img/202109162038974.png" alt="image-20210916203841882"></p></blockquote><p>(2) 重启网络服务</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 重启方式1：</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">/etc/init.d/network</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> restart</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#重启方式2：</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> restart</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> network</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><hr><h3 id="使用密钥登录到-root-账户" tabindex="-1"><a class="header-anchor" href="#使用密钥登录到-root-账户"><span>使用密钥登录到 root 账户</span></a></h3><blockquote><p><a href="https://blog.csdn.net/weixin_39591031/article/details/118700963" target="_blank" rel="noopener noreferrer">腾讯云 密钥直接登录 root_Xav Pun 的博客-CSDN 博客</a></p></blockquote><ul><li>腾讯云的 <code>ubuntu</code> 系统, 生成密钥后绑定服务器默认会绑定在 <code>ubuntu</code> 用户下, 若要通过密钥登录到 <code>root</code> 用户则需要将 <code>ubuntu</code> 用户下的密钥复制到 <code>root</code> 用户下:<div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">cat</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /home/ubuntu/.ssh/authorized_keys</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &gt; </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">/root/.ssh/authorized_keys</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>然后就可以使用密钥登录到 <code>root</code> 用户了</li></ul><hr><h2 id="探针" tabindex="-1"><a class="header-anchor" href="#探针"><span>探针</span></a></h2><blockquote><p><a href="https://github.com/CokeMine/ServerStatus-Hotaru" target="_blank" rel="noopener noreferrer">cokemine/ServerStatus-Hotaru: 云探针、多服务器探针、云监控、多服务器云监控 (github.com)</a></p></blockquote><p>在连不上 GitHub 时使用方式</p><blockquote><p>Coding 目前好像是需要登录才能下载, 仓库提供的默认脚本使用 coding 会拉不下来仓库, 所以还是用 github</p><p>将源仓库中的 github 相关链接换成了 GitHub Proxy 对应链接, 于是有了下文中的脚本</p></blockquote><ul><li><p>服务端</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 源仓库的 shell(由于有时服务器不一定可以连上 github 所以修改了其中的部分链接便有了下面第二个自己修改的 shell)</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># wget https://cokemine.coding.net/p/hotarunet/d/ServerStatus-Hotaru/git/raw/master/status.sh</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">wget</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> https://cdn.ayusummer233.top/shell/status.sh</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">bash</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> status.sh</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> s</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><blockquote><ul><li><code>选择 GitHub / Coding.net</code>: 保持默认(Github)(1)</li><li><code>选择监听端口</code>: 保持默认(35601) 或者自己填个未被使用且已放通的端口</li><li><code>自动部署</code>: 保持默认(y)</li><li><code>输入本机域名或ip</code>: 没有域名就直接输入本机 ip</li><li><code>输入 ServerStatus 服务端中网站要设置的 域名/IP 的端口</code>: 随便输个未被使用且已放通的端口, 这个端口用于访问 Web 页面</li></ul><p><img src="http://cdn.ayusummer233.top/img/202209131744795.png" alt="image-20220913174443396"></p><p><img src="http://cdn.ayusummer233.top/img/202209131745321.png" alt="image-20220913174525133"></p><p><img src="http://cdn.ayusummer233.top/img/202209131748700.png" alt="image-20220913174857476"></p><p><img src="http://cdn.ayusummer233.top/img/202209131749559.png" alt="image-20220913174920330"></p></blockquote></li><li><p>客户端</p><p>首先在服务端添加一个节点配置, 用于与客户端配置对接</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">bash</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> status.sh</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> s</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>进入 7-服务端配置</li><li>1 - 节点配置</li><li>设置节点账密(自定义, 之后客户端通过此项配置进行连接)以及基本信息</li></ul></li></ul><blockquote><p><img src="http://cdn.ayusummer233.top/img/202209131754161.png" alt="image-20220913175404031"></p><p><img src="http://cdn.ayusummer233.top/img/202209131757271.png" alt="image-20220913175713057"></p></blockquote><p>在客户端进行相应配置(与服务端刚才设置的节点信息一致即可)</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 源仓库的 shell(由于有时服务器不一定可以连上 github 所以修改了其中的部分链接便有了下面第二个自己修改的 shell)</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># wget https://cokemine.coding.net/p/hotarunet/d/ServerStatus-Hotaru/git/raw/master/status.sh</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">wget</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> https://cdn.ayusummer233.top/shell/status.sh</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">bash</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> status.sh</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> c</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><img src="http://cdn.ayusummer233.top/img/202209131759040.png" alt="image-20220913175901782"></p></blockquote><hr><p>若客户端为 windows 则需要手动用 Python 跑下</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">curl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> https://bootstrap.pypa.io/get-pip.py</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -o</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> get-pip.py</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> # 若未安装pip</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">python</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> get-pip.py</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 可以换下源, 不换也行</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">pip</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> config</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> set</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> global.index-url</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> https://pypi.tuna.tsinghua.edu.cn/simple/</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">pip</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> psutil</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 修改 status-psutil.py(在主仓库的 clients 目录中)</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># https://github.com/cokemine/ServerStatus-Hotaru/blob/master/clients/status-psutil.py</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 运行程序, 也可以将这句写成个 bat 文件然后双击运行</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">python</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> status-psutil.py</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>cmd 在快速编辑模式下运行命令时, 若用户鼠标点击到窗口区域可能会引起程序阻塞, 可以将其点掉</p><p><img src="http://cdn.ayusummer233.top/img/202209281007350.png" alt="image-20220928100730680"></p><blockquote><p>快速编辑模式是一种很便捷的操作方式：左键选中，右键复制以及右键从剪贴板粘贴内容等<br> 如果鼠标选中控制台界面上的内容，控制台就被阻塞了<br> 在 Windows Server 2012 及 Windowns 8 以上，控制台窗口的程序默认是打开“快速编辑模式”的开关的。</p></blockquote></blockquote><hr>`,54)]))}const o=s(n,[["render",l],["__file","Linux服务器.html.vue"]]),d=JSON.parse('{"path":"/%E9%80%9A%E8%AF%86/Linux/Linux%E6%9C%8D%E5%8A%A1%E5%99%A8.html","title":"Linux服务器","lang":"zh-CN","frontmatter":{"description":"Linux服务器 Linux服务器 远程连接服务器 remote-SSH 文件下载 腾讯云轻量 内网 DNS 使用密钥登录到 root 账户 探针 远程连接服务器 remote-SSH 先在控制台生成并绑定密钥(本地密钥妥善保管), 然后再重置 root 密码 20211122113415 > 20211122113543 轻量应用服务器 重置密码 -...","head":[["meta",{"property":"og:url","content":"https://233official.github.io/VuePressTemplateTest/VuePressTemplateTest/%E9%80%9A%E8%AF%86/Linux/Linux%E6%9C%8D%E5%8A%A1%E5%99%A8.html"}],["meta",{"property":"og:site_name","content":"DailyNotes"}],["meta",{"property":"og:title","content":"Linux服务器"}],["meta",{"property":"og:description","content":"Linux服务器 Linux服务器 远程连接服务器 remote-SSH 文件下载 腾讯云轻量 内网 DNS 使用密钥登录到 root 账户 探针 远程连接服务器 remote-SSH 先在控制台生成并绑定密钥(本地密钥妥善保管), 然后再重置 root 密码 20211122113415 > 20211122113543 轻量应用服务器 重置密码 -..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"http://cdn.ayusummer233.top/img/20211122113415.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-01-03T05:49:11.000Z"}],["meta",{"property":"article:modified_time","content":"2025-01-03T05:49:11.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Linux服务器\\",\\"image\\":[\\"http://cdn.ayusummer233.top/img/20211122113415.png\\",\\"http://cdn.ayusummer233.top/img/20211122113543.png\\",\\"http://cdn.ayusummer233.top/img/202111231103098.png\\",\\"http://cdn.ayusummer233.top/img/202111231111636.png\\",\\"http://cdn.ayusummer233.top/img/202111231113303.png\\",\\"http://cdn.ayusummer233.top/img/202111011032910.png\\",\\"http://cdn.ayusummer233.top/img/202111011043258.png\\",\\"http://cdn.ayusummer233.top/img/202111011043774.png\\",\\"http://cdn.ayusummer233.top/img/202111011045617.png\\",\\"http://cdn.ayusummer233.top/img/202111011046461.png\\",\\"http://cdn.ayusummer233.top/img/202109162038974.png\\",\\"http://cdn.ayusummer233.top/img/202209131744795.png\\",\\"http://cdn.ayusummer233.top/img/202209131745321.png\\",\\"http://cdn.ayusummer233.top/img/202209131748700.png\\",\\"http://cdn.ayusummer233.top/img/202209131749559.png\\",\\"http://cdn.ayusummer233.top/img/202209131754161.png\\",\\"http://cdn.ayusummer233.top/img/202209131757271.png\\",\\"http://cdn.ayusummer233.top/img/202209131759040.png\\",\\"http://cdn.ayusummer233.top/img/202209281007350.png\\"],\\"dateModified\\":\\"2025-01-03T05:49:11.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"233\\",\\"url\\":\\"https://233official.github.io/dailynotes/\\"}]}"]],"date":"2025-01-03T05:49:11.000Z"},"headers":[{"level":2,"title":"远程连接服务器","slug":"远程连接服务器","link":"#远程连接服务器","children":[{"level":3,"title":"remote-SSH","slug":"remote-ssh","link":"#remote-ssh","children":[]}]},{"level":2,"title":"文件下载","slug":"文件下载","link":"#文件下载","children":[]},{"level":2,"title":"腾讯云轻量","slug":"腾讯云轻量","link":"#腾讯云轻量","children":[{"level":3,"title":"内网 DNS","slug":"内网-dns","link":"#内网-dns","children":[]},{"level":3,"title":"使用密钥登录到 root 账户","slug":"使用密钥登录到-root-账户","link":"#使用密钥登录到-root-账户","children":[]}]},{"level":2,"title":"探针","slug":"探针","link":"#探针","children":[]}],"git":{"createdTime":1735883351000,"updatedTime":1735883351000,"contributors":[{"name":"233","username":"233","email":"ayusummer233@vip.qq.com","commits":1,"url":"https://github.com/233"}]},"readingTime":{"minutes":6.21,"words":1864},"filePathRelative":"通识/Linux/Linux服务器.md","localizedDate":"2025年1月3日","excerpt":"","autoDesc":true}');export{o as comp,d as data};
