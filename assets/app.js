'use strict';
document.addEventListener('contextmenu',event=>event.preventDefault());
function isEditableTarget(target){return target instanceof Element&&!!target.closest('input,textarea,[contenteditable]:not([contenteditable="false"])')}
['copy','cut','selectstart'].forEach(type=>document.addEventListener(type,event=>{if(!isEditableTarget(event.target))event.preventDefault()}));
/* Handbook 5.0 – framework-free, GitHub Pages compatible. One lesson = one JSON file. */
const DICT={
 vi:{emptyCurriculum:'Chưa có bài học. Nội dung sẽ được bổ sung sau.',tools:'Công cụ học tập',cla:'Luyện thi CLA',claEyebrow:'CÔNG CỤ HỌC TẬP / LUYỆN THI',claTitle:'Luyện thi CLA',claIntro:'Khu vực ôn luyện bài đánh giá năng lực tiếng Anh. Nội dung đề, bài nghe, bài đọc và bài viết sẽ được bổ sung sau.',claSoon:'Sắp ra mắt',claExplore:'Xem chuyên mục',claNotice:'Chuyên mục đã được tạo. Chưa có đề thi hoặc nội dung bài luyện tập được xuất bản.',claReturn:'Xem các công cụ học tập',claReading:'Đọc hiểu',claListening:'Nghe hiểu',claWriting:'Viết báo cáo vụ việc',claMock:'Thi thử',claModuleDesc:'Nội dung và bài tập sẽ được bổ sung.',toolsTitle:'Công cụ hỗ trợ học tập',toolsIntro:'Tài liệu tham khảo, lưu tiến độ học và công cụ ôn luyện.',toolsOpen:'Mở công cụ',toolsLibraryDesc:'Tra cứu bộ tài liệu UN và nguồn tham khảo.',toolsProgressDesc:'Xem các bài đã đánh dấu và kết quả kiểm tra.',toolsClaDesc:'Không gian ôn luyện CLA: đọc, nghe, viết báo cáo và thi thử. Sẽ cập nhật nội dung sau.',backTools:'Quay lại công cụ học tập',noticeNoExam:'Chưa có câu hỏi hoặc đề thi CLA được xuất bản.',home:'Trang chủ',core:'Kiến thức UN',fpu:'Huấn luyện FPU',ipo:'Huấn luyện IPO',advanced:'Kiến thức nâng cao',library:'Thư viện nguồn',learning:'Học tập của tôi',overview:'Tổng quan',programmes:'Chương trình học tập',programmesSub:'Chọn lộ trình theo nhiệm vụ và trình độ',discover:'Khám phá bài học',browse:'Xem chương trình',allLessons:'Toàn bộ bài học',suggested:'Bài học đã có bản thảo',suggestedSub:'Nội dung đang tiếp tục biên tập và kiểm chứng',heroEyebrow:'HỆ THỐNG HỌC LIỆU CẢNH SÁT LIÊN HỢP QUỐC',heroTitle:'Học kiến thức UN. Nắm vững nghiệp vụ. Sẵn sàng nhiệm vụ.',heroDesc:'Không gian học tập dành cho FPU và IPO với bài giảng Việt – Anh, chương trình học rõ ràng và nguồn tài liệu tham khảo.',heroStart:'Xem các khóa học',heroLibrary:'Nguồn tài liệu UN',indexCount:'Đầu mục học liệu',coreCount:'Kiến thức dùng chung',readyCount:'Bản thảo bài giảng',progressCount:'Bài đã đánh dấu học',sourceNotice:'Dự án học liệu độc lập, không trực thuộc hoặc được Liên hợp quốc bảo trợ.',courseCore:'Nền tảng CPTM và nghiệp vụ Cảnh sát UN dành cho cả FPU và IPO.',courseFpu:'Chương trình huấn luyện dành cho đơn vị Cảnh sát gìn giữ hòa bình.',courseIpo:'Cảnh sát cá nhân, xây dựng năng lực, cố vấn và chuẩn bị tuyển chọn.',courseAdvanced:'Kiến thức bổ trợ, bảo vệ dân thường và huấn luyện chỉ huy FPU.',search:'Tìm theo tên bài, mã bài hoặc chủ đề...',allGroups:'Tất cả học phần',allStatus:'Tất cả trạng thái',draft:'Có nội dung bản thảo',planned:'Đang biên soạn',published:'Đã xuất bản',results:'mục học liệu',minute:'phút',view:'Mở bài',noResults:'Không tìm thấy bài học phù hợp.',back:'Quay về danh mục',contents:'Mục lục bài học',introduction:'Giới thiệu',lessonStatus:'Tình trạng bài học',underDevelopment:'Nội dung đang biên soạn',underDevelopmentDesc:'Bài học này mới được đưa vào danh mục. Nội dung chi tiết sẽ được bổ sung sau khi biên soạn và kiểm chứng tài liệu. Bạn có thể truy cập nguồn tham khảo ở cuối trang.',draftCaution:'Đây là bản thảo phục vụ nghiên cứu; cần tiếp tục đối chiếu với hướng dẫn UN hiện hành trước khi dùng trong huấn luyện chính thức.',knowledge:'Nội dung kiến thức',assessment:'Kiểm tra kiến thức',chooseAnswer:'Chọn một đáp án để kiểm tra.',checkAnswer:'Kiểm tra đáp án',correct:'Chính xác!',incorrect:'Chưa chính xác.',quizResult:'Kết quả kiểm tra',markStudied:'Đánh dấu đã học',marked:'Đã đánh dấu học',unmark:'Bỏ đánh dấu',references:'Tài liệu tham khảo',openSource:'Mở tài liệu gốc ↗',sourcesIntro:'Tài liệu công khai của UN và các nguồn được dẫn trong chương trình. Handbook không sao chép nguyên văn các bộ giáo trình.',privacy:'Dữ liệu học tập chỉ lưu trên trình duyệt này.',saved:'Đã lưu',progressIntro:'Theo dõi các bài bạn đã đánh dấu. Dữ liệu lưu tại thiết bị này, không cần tạo tài khoản.',savedLessons:'Bài đã đánh dấu',availableDrafts:'Bài có nội dung bản thảo',backup:'Sao lưu tiến độ',backupDesc:'Xuất danh sách bài đã đánh dấu và điểm kiểm tra dưới dạng JSON.',export:'Xuất dữ liệu',reset:'Xóa tiến độ',resetConfirm:'Bạn chắc chắn muốn xóa tất cả tiến độ trên trình duyệt này?',emptySaved:'Chưa có bài học nào được đánh dấu.',total:'Tổng số',group:'Học phần',footer:'Dự án học liệu độc lập. Nội dung nghiệp vụ cần được kiểm chứng với tài liệu chính thức hiện hành.',theme:'Đổi giao diện sáng / tối',menu:'Mở danh mục',close:'Đóng danh mục',errorTitle:'Không tải được dữ liệu',errorDesc:'Hãy mở website bằng Live Server hoặc GitHub Pages; không sử dụng đường dẫn file://.',retry:'Thử lại',notFound:'Không tìm thấy bài học.',returnHome:'Về trang chủ',studyTime:'Thời lượng tham khảo',referencesSource:'Nguồn tham khảo',draftCount:'bài có bản thảo',notOfficial:'Không phải trang web chính thức của Liên hợp quốc',update:'Cập nhật',loadError:'Lỗi tải bài học',lessonLabel:'Bài học',modules:'Học phần',homeShortcut:'Các bài có thể đọc',myProgress:'Tiến độ cá nhân'},
 en:{emptyCurriculum:'No lessons yet. Content will be added later.',tools:'Learning Tools',cla:'CLA Exam Practice',claEyebrow:'LEARNING TOOLS / EXAM PREPARATION',claTitle:'CLA Exam Practice',claIntro:'A dedicated area for English competency assessment preparation. Reading, listening, incident report writing and mock tests will be added later.',claSoon:'Coming soon',claExplore:'Explore section',claNotice:'This section is ready. No practice tests or assessment content have been published yet.',claReturn:'Explore learning tools',claReading:'Reading',claListening:'Listening',claWriting:'Incident Report Writing',claMock:'Mock Assessment',claModuleDesc:'Lessons and exercises will be added.',toolsTitle:'Learning Tools',toolsIntro:'Source materials, learning progress and assessment preparation.',toolsOpen:'Open tool',toolsLibraryDesc:'Browse public UN training sources and references.',toolsProgressDesc:'View marked lessons and quiz results.',toolsClaDesc:'CLA preparation hub for reading, listening, report writing and practice tests. Content coming later.',backTools:'Back to learning tools',noticeNoExam:'No CLA questions or tests have been published yet.',home:'Home',core:'UN Core Knowledge',fpu:'FPU Training',ipo:'IPO Training',advanced:'Advanced Knowledge',library:'Source Library',learning:'My Learning',overview:'Overview',programmes:'Learning programmes',programmesSub:'Choose a pathway for your role and level',discover:'Explore lessons',browse:'Browse programme',allLessons:'All lessons',suggested:'Lessons with draft content',suggestedSub:'Draft materials undergoing review and expansion',heroEyebrow:'UN POLICE LEARNING RESOURCE',heroTitle:'Understand the UN. Build policing knowledge. Prepare for your mission.',heroDesc:'A learning space for FPU and IPO personnel with English and Vietnamese lessons, structured programmes and source references.',heroStart:'Explore programmes',heroLibrary:'UN source materials',indexCount:'Curriculum entries',coreCount:'Shared foundations',readyCount:'Draft lessons',progressCount:'Lessons marked studied',sourceNotice:'Independent educational project; not affiliated with or endorsed by the United Nations.',courseCore:'CPTM foundations and shared UN Police professional knowledge.',courseFpu:'Specialized preparation for Formed Police Units.',courseIpo:'Individual policing, capacity development, advising and selection readiness.',courseAdvanced:'Supplementary subjects, protection of civilians and FPU command training.',search:'Search by title, code or subject...',allGroups:'All modules',allStatus:'All statuses',draft:'Draft content available',planned:'In development',published:'Published',results:'curriculum entries',minute:'min',view:'Open lesson',noResults:'No matching lessons found.',back:'Back to catalogue',contents:'Lesson contents',introduction:'Introduction',lessonStatus:'Lesson status',underDevelopment:'Content in development',underDevelopmentDesc:'This topic is indexed in the curriculum. Detailed material will be added once it has been authored and reviewed. You can access the source reference below.',draftCaution:'This draft is for learning and review; verify operational details against current UN guidance before using it in formal training.',knowledge:'Lesson content',assessment:'Knowledge check',chooseAnswer:'Select one answer to check your response.',checkAnswer:'Check answer',correct:'Correct!',incorrect:'Not quite.',quizResult:'Assessment result',markStudied:'Mark as studied',marked:'Marked as studied',unmark:'Remove mark',references:'References',openSource:'Open original source ↗',sourcesIntro:'Public UN resources and other cited sources. Handbook does not reproduce entire official training packages.',privacy:'Learning data is stored only in this browser.',saved:'Saved',progressIntro:'Review the lessons you marked as studied. Progress is stored on this device; no account is required.',savedLessons:'Marked lessons',availableDrafts:'Lessons with draft content',backup:'Back up progress',backupDesc:'Export marked lessons and quiz scores as JSON.',export:'Export data',reset:'Clear progress',resetConfirm:'Are you sure you want to clear all progress from this browser?',emptySaved:'No lessons have been marked as studied yet.',total:'Total',group:'Module',footer:'Independent educational project. Operational content should be verified against current official guidance.',theme:'Toggle light / dark theme',menu:'Open navigation',close:'Close navigation',errorTitle:'Unable to load data',errorDesc:'Open the website using Live Server or GitHub Pages, not a file:// address.',retry:'Retry',notFound:'Lesson not found.',returnHome:'Go home',studyTime:'Estimated study time',referencesSource:'Source reference',draftCount:'draft lessons',notOfficial:'Not an official United Nations website',update:'Updated',loadError:'Unable to load lesson',lessonLabel:'Lesson',modules:'Modules',homeShortcut:'Lessons you can read',myProgress:'Personal progress'}
};
DICT.vi.heroTitle='VỮNG NGHIỆP VỤ\nSẴN SÀNG NHẬN NHIỆM VỤ';
DICT.vi.heroDesc='Không gian học tập dành cho FPU và IPO, bao gồm hệ thống các Bài giảng song ngữ Việt - Anh theo trình độ và Tài liệu tham khảo';
DICT.vi.progressIntro='Tiến độ và điểm kiểm tra được lưu trên trình duyệt của thiết bị này, không cần tài khoản và không tự đồng bộ sang thiết bị khác. Xóa dữ liệu trình duyệt có thể làm mất tiến độ; bạn có thể xuất dữ liệu để sao lưu.';
DICT.en.progressIntro='Progress and quiz scores are stored in this browser on this device. No account is required, and data does not sync across devices. Clearing browser data may erase your progress; export your data to keep a backup.';
DICT.vi.draft='Có nội dung';
DICT.en.draft='Content available';
DICT.vi.progressCount='Bài đã học';
DICT.en.progressCount='Lessons studied';
const ICONS={home:'⌂',core:'◎',fpu:'⬡',ipo:'♙',advanced:'✳',library:'▤',learning:'◴',tools:'⚒',cla:'✎'};
const state={catalog:[],sources:{},sourceSummaries:{},language:safeGet('hb5_language')||'vi',dark:safeGet('hb5_dark')==='true',completed:readJSON('hb5_completed',[]),scores:readJSON('hb5_scores',{}),details:new Map(),search:'',group:'all',status:'all',currentArea:'',currentPage:'',lastRoute:'',loading:false};
if(state.language==='both')state.language='vi';
const $=(s,scope=document)=>scope.querySelector(s),$$=(s,scope=document)=>Array.from(scope.querySelectorAll(s));
function safeGet(k){try{return localStorage.getItem(k)}catch{return null}}
function safePut(k,v){try{localStorage.setItem(k,v)}catch{}}
function readJSON(k,fallback){try{const v=JSON.parse(safeGet(k)||'null');return v??fallback}catch{return fallback}}
function esc(value){return String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
function lang(){return state.language==='en'?'en':'vi'}
function t(k){return DICT[lang()][k]||k}
function localText(v){if(!v)return '';if(typeof v==='string')return v;return v[lang()]??v.vi??v.en??''}
function pairedText(v){if(!v)return '';if(typeof v==='string')return esc(v);if(state.language==='both')return `${esc(v.en||'')}<span class="english-translation">${esc(v.vi||'')}</span>`;return esc(localText(v))}
function lineTitle(v){if(!v)return '';if(typeof v==='string')return esc(v);return state.language==='both'?`${esc(v.en||'')} / ${esc(v.vi||'')}`:esc(localText(v))}
function inlineMarkdown(value){return esc(value).replace(/`([^`]+)`/g,'<code>$1</code>').replace(/\*\*([^*]+)\*\*/g,'<strong>$1</strong>')}
function lessonParagraphs(value){
 const lines=String(value||'').split('\n');let result='',i=0;
 const cells=line=>line.trim().replace(/^\||\|$/g,'').split('|').map(x=>x.trim());
 while(i<lines.length){
  const line=lines[i].trim();if(!line){i++;continue}
  if(line.startsWith('|')&&/^\|?\s*:?-{3,}/.test((lines[i+1]||'').trim())){
   const headers=cells(line);i+=2;let rows='';
   while(i<lines.length&&lines[i].trim().startsWith('|'))rows+='<tr>'+cells(lines[i++]).map(c=>'<td>'+inlineMarkdown(c)+'</td>').join('')+'</tr>';
   result+='<div class="table-scroll" role="region" aria-label="'+(lang()==='vi'?'Bảng nội dung':'Content table')+'" tabindex="0"><table><thead><tr>'+headers.map(c=>'<th scope="col">'+inlineMarkdown(c)+'</th>').join('')+'</tr></thead><tbody>'+rows+'</tbody></table></div>';continue;
  }
  const match=line.match(/^([-*]|\d+\.)\s+/);
  if(match){
   const ordered=/^\d/.test(match[1]),tag=ordered?'ol':'ul';let items='';
   while(i<lines.length&&new RegExp(ordered?'^\\d+\\.\\s+':'^[-*]\\s+').test(lines[i].trim()))items+='<li>'+inlineMarkdown(lines[i++].trim().replace(/^([-*]|\d+\.)\s+/,''))+'</li>';
   result+='<'+tag+'>'+items+'</'+tag+'>';continue;
  }
  const parts=[line];i++;
  while(i<lines.length&&lines[i].trim()&&!/^(\||[-*]\s|\d+\.\s)/.test(lines[i].trim()))parts.push(lines[i++].trim());
  result+='<p>'+parts.map(inlineMarkdown).join('<br>')+'</p>';
 }
 return result;
}
function textBody(obj){const language=typeof obj==='object'&&obj?.[lang()]?lang():'vi';return `<div lang="${language}">${lessonParagraphs(localText(obj))}</div>`}
function route(){const raw=decodeURIComponent(location.hash.replace(/^#\/?/,'')).split('/');return {page:raw[0]==='advanced'?'cla':raw[0]||'home',id:raw[1]||''}}
function areaTitle(a){return t(a)}
function areaDesc(a){return a==='cla'?t('toolsClaDesc'):t('course'+a[0].toUpperCase()+a.slice(1))}
function countArea(area){return state.catalog.filter(x=>x.area===area).length}
function sectionGroup(meta){return localText(meta.group)||meta.groupKey||''}
function statusName(status){return t(status==='draft'?'draft':status==='published'?'published':'planned')}
function statusBadge(status){if(status==='draft')return '';return `<span class="status-pill ${status==='published'?'published':'planned'}">${esc(statusName(status))}</span>`}
function navLinks(){return [['home','home'],['core','core'],['fpu','fpu'],['ipo','ipo'],['cla','cla'],['library','library'],['learning','learning'],['tools','tools']]}
function logoIcon(cls=''){return `<svg class="${cls}" viewBox="0 0 96 96" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 31h24c10 0 14 5 14 13v32c0-10-10-13-19-13H18V31Z"/><path d="M78 31H54c-10 0-14 5-14 13v32c0-10 10-13 19-13h19V31Z"/><circle cx="48" cy="21" r="5"/><path d="M22 22h13m26 0h13"/></svg>`}
function buildShell(page){
 const programmeKeys=['home','core','fpu','ipo','cla'];
 const toolsKeys=['library','learning'];
 const navItem=(key)=>`<a class="nav-link ${page===key?'active':''}" href="#/${key}" ${page===key?'aria-current="page"':''}><span class="nav-symbol" aria-hidden="true">${ICONS[key]}</span><span class="nav-copy">${esc(t(key))}${key==='learning'?`<small class="nav-hint">${esc(lang()==='vi'?'Lưu trên trình duyệt · Không cần tài khoản':'Saved in this browser · No account')}</small>`:''}</span></a>`;
 $('#app').innerHTML=`<a class="skip-link" href="#main">${esc(t('discover'))}</a>
  <header class="site-header"><a href="#/home" class="header-brand"><img class="brand-monogram" src="assets/handbook-un-logo.png" alt="Logo Handbook UN"><strong>HANDBOOK</strong><span class="brand-descriptor">/ UN POLICE</span></a>
  <div class="header-controls"><div class="language-control" role="group" aria-label="Language"><button data-language="vi" class="${state.language==='vi'?'active':''}" aria-pressed="${state.language==='vi'}">VI</button><button data-language="en" class="${state.language==='en'?'active':''}" aria-pressed="${state.language==='en'}">EN</button></div>
 <button class="circle-button theme-switch" id="theme-toggle" aria-label="${esc(t('theme'))}" title="${esc(t('theme'))}">${state.dark?'☀':'◐'}</button><button id="mobile-menu" class="circle-button menu-button" aria-label="${esc(t('menu'))}" aria-controls="sidebar" aria-expanded="false">☰</button></div></header>
 <div class="mobile-overlay" id="overlay"></div><div class="app-layout"><aside id="sidebar" class="sidebar">
 <div class="side-section">${esc(t('programmes'))}</div><nav class="side-links" aria-label="${esc(t('programmes'))}">${programmeKeys.map(navItem).join('')}</nav>
 <div class="side-section secondary-section">${esc(t('tools'))}</div><nav class="side-links" aria-label="${esc(t('tools'))}">${toolsKeys.map(navItem).join('')}</nav>
 </aside>
 <div class="workspace"><div class="workspace-topline"><span class="breadcrumb"><a href="#/home">${esc(t('home'))}</a> <span class="crumb-slash">/</span> ${esc(t(page==='home'?'overview':page in ICONS?page:'home'))}</span><a class="quick-tool" href="#/cla">${esc(t('cla'))} ↗</a></div><main class="main" id="main"></main></div></div>`;
 document.body.classList.toggle('dark',state.dark);
 $$('#app [data-language]').forEach(el=>el.addEventListener('click',()=>{state.language=el.dataset.language;safePut('hb5_language',state.language);render()}));
 $('#theme-toggle').onclick=()=>{state.dark=!state.dark;safePut('hb5_dark',String(state.dark));render()};
 $('#mobile-menu').onclick=()=>toggleMenu(true);$('#overlay').onclick=()=>toggleMenu(false);
 $$('.nav-link,.header-link').forEach(el=>el.addEventListener('click',()=>toggleMenu(false)));
}
function toggleMenu(open){$('#sidebar')?.classList.toggle('open',open);$('#overlay')?.classList.toggle('show',open);$('#mobile-menu')?.setAttribute('aria-expanded',String(open))}
function footer(){return `<footer class="footer"><span class="footer-notice">${esc(t('sourceNotice'))}</span><span class="footer-message">${esc(lang()==='en'?'Supporting you on your journey of learning and serving in peacekeeping.':'Đồng hành cùng bạn trên hành trình học tập và thực hiện nhiệm vụ gìn giữ hòa bình.')}</span></footer>`}
function placeSiteFooter(){const el=$('#main > .footer');if(!el)return;$('#app > .site-footer')?.remove();el.classList.add('site-footer');$('#app').append(el)}
function sectionHead(eye,title,sub='',link=null){return `<div class="section-top"><div><span class="eyebrow">${esc(eye)}</span><h2>${esc(title)}</h2>${sub?`<p>${esc(sub)}</p>`:''}</div>${link?`<a class="text-link" href="${link}">${esc(t('browse'))} →</a>`:''}</div>`}
function stat(number,label){return `<div class="stat"><div class="stat-number">${esc(String(number).padStart(2,'0'))}</div><div class="stat-label">${esc(label)}</div></div>`}
function homeStats(){
 const programmeCount=['core','fpu','ipo'].filter(area=>countArea(area)>0).length;
 const completedCount=state.catalog.filter(lesson=>state.completed.includes(lesson.id)).length;
 return `<div class="stats-grid home-stats" aria-label="${lang()==='vi'?'Tổng quan học liệu':'Learning overview'}">${stat(state.catalog.length,lang()==='vi'?'Bài học trong chương trình':'Lessons in the curriculum')}${stat(programmeCount,lang()==='vi'?'Chương trình: UN · FPU · IPO':'Programmes: UN · FPU · IPO')}${completedCount>0?stat(completedCount,t('progressCount')):''}</div>`;
}
function completionBadge(id){return `<span class="completion-badge" data-completion-id="${esc(id)}" ${state.completed.includes(id)?'':'hidden'}>${lang()==='vi'?'Đã học':'Studied'}</span>`}
function pendingDraftBadge(meta){return meta.contentVersion==='4tab-2026-10-26'?`<span class="pending-draft-badge">${lang()==='vi'?'Đang dự thảo':'Draft in progress'}</span>`:''}
function updateCompletionBadges(id){$$('[data-completion-id]').filter(el=>el.dataset.completionId===id).forEach(el=>{el.hidden=!state.completed.includes(id)})}
function setupLessonContents(root,selector){
 const nav=root.querySelector(selector);
 if(!nav||nav.parentElement.classList.contains('lesson-contents'))return;
 const wrapper=document.createElement('div');
 wrapper.className='lesson-contents';
 const toggle=document.createElement('button');
 toggle.type='button';toggle.className='lesson-contents-toggle';
 nav.id=root.id+'-contents';
 toggle.setAttribute('aria-controls',nav.id);toggle.setAttribute('aria-expanded','false');
 nav.before(wrapper);wrapper.append(toggle,nav);
 const update=()=>{
  const buttons=Array.from(nav.querySelectorAll('[data-chapter]'));
  const current=buttons.findIndex(button=>button.getAttribute('aria-current')==='true');
  const label=lang()==='vi'?'Mục lục bài học':'Lesson contents';
  toggle.innerHTML='<span class="lesson-contents-copy"><span class="lesson-contents-label">'+esc(label)+' · '+(current+1)+'/'+buttons.length+'</span><span class="lesson-contents-current">'+esc(buttons[current]?.textContent||'')+'</span></span><span class="lesson-contents-arrow" aria-hidden="true">⌄</span>';
 };
 toggle.onclick=()=>{const open=wrapper.classList.toggle('is-open');toggle.setAttribute('aria-expanded',String(open))};
 root.addEventListener('click',event=>{
  if(event.target.closest('[data-chapter]')&&matchMedia('(max-width:760px)').matches){
   wrapper.classList.remove('is-open');toggle.setAttribute('aria-expanded','false');toggle.focus({preventScroll:true});
  }
  update();
 });
 wrapper.addEventListener('keydown',event=>{if(event.key==='Escape'&&wrapper.classList.contains('is-open')){wrapper.classList.remove('is-open');toggle.setAttribute('aria-expanded','false');toggle.focus()}});
 update();
}
function card(meta){const title=pairedText(meta.title);const name=state.language==='both'?`<h3>${esc(meta.title.en)}</h3><div class="subtitle">${esc(meta.title.vi)}</div>`:`<h3>${esc(localText(meta.title))}</h3>`;return `<a href="#/lesson/${encodeURIComponent(meta.id)}" class="lesson-card"><div class="lesson-meta"><span class="lesson-id">${esc(meta.id)}</span><span class="lesson-card-badges">${statusBadge(meta.status)}${pendingDraftBadge(meta)}${completionBadge(meta.id)}</span></div>${name}<div class="muted small">${esc(sectionGroup(meta))}</div><div class="lesson-card-bottom"><span>${esc(meta.minutes||20)} ${esc(t('minute'))}</span><span class="read-more">${esc(t('view'))} ↗</span></div></a>`}
function home(){
 const areas=['core','fpu','ipo','cla'];
 let featured=state.catalog.filter(x=>x.status==='draft'||x.status==='published');
 const intro=lang()==='en'?{
  brand:'UNPOL LEARNING',knowledge:'UN Knowledge',courses:'Courses',resources:'Resources',
  title:['Understand the United Nations,','be ready for your mission'],
  desc:'A place to explore UN knowledge for FPU and IPO personnel: peacekeeping, organizational structures, standards of conduct and field policing.',
  tags:['Peacekeeping','FPU & IPO','Vietnamese - English'],explore:'Explore UN knowledge',browse:'View courses',
  steps:['Understand the United Nations and peacekeeping','Learn policing skills and field English','Prepare for deployment and be mission ready']
 }:{
  brand:'HỌC LIỆU UNPOL',knowledge:'Kiến thức LHQ',courses:'Khóa học',resources:'Tài liệu',
  title:['Hiểu về Liên hợp quốc,','vững vàng khi nhận nhiệm vụ'],
  desc:'Nơi chia sẻ kiến thức về LHQ cho FPU và IPO: gìn giữ hòa bình, cơ cấu tổ chức, quy tắc ứng xử, nghiệp vụ thực địa.',
  tags:['Gìn giữ hòa bình','FPU & IPO','Song ngữ Việt - Anh'],explore:'Khám phá kiến thức',browse:'Xem các khóa học',
  steps:['Tìm hiểu về Liên hợp quốc và gìn giữ hòa bình','Học nghiệp vụ và tiếng Anh thực địa','Chuẩn bị triển khai, sẵn sàng nhận nhiệm vụ']
 };
 $('#main').innerHTML=`<section class="intro-hero" aria-labelledby="intro-title">
  <div class="intro-content">
   <div class="intro-copy">
   <div class="intro-eyebrow">${esc(t('heroEyebrow'))}</div>
   <h1 id="intro-title">${intro.title.map(line=>`<span>${esc(line)}</span>`).join('')}</h1>
   <p class="intro-description">${esc(intro.desc)}</p>
   <ul class="intro-tags" aria-label="${esc(t('overview'))}">${intro.tags.map(tag=>`<li>${esc(tag)}</li>`).join('')}</ul>
    <div class="intro-actions"><a class="intro-primary" href="#/core">${esc(intro.explore)}</a><button class="intro-secondary" type="button" onclick="document.querySelector('.programme-grid').scrollIntoView({behavior:'smooth',block:'center'})">${esc(intro.browse)}</button></div>
   </div>
   <div class="intro-logo"><img src="assets/handbook-un-logo.png" alt="Handbook UN" width="1600" height="1600"></div>
  </div>
  <ol class="intro-steps">${intro.steps.map((step,i)=>`<li><span class="intro-step-number" aria-hidden="true">${i+1}</span><span>${esc(step)}</span></li>`).join('')}</ol>
 </section>${homeStats()}<section class="section">${sectionHead(t('overview'),t('programmes'),t('programmesSub'))}<div class="programme-grid">${areas.map(a=>`<a href="#/${a}" class="programme-card"><span class="area-symbol" aria-hidden="true">${ICONS[a]}</span><span class="area-count">${countArea(a)}</span><h3>${esc(areaTitle(a))}</h3><p>${esc(areaDesc(a))}</p><span class="card-bottom">${esc(t('browse'))} ↗</span></a>`).join('')}</div></section><section class="section">${sectionHead(t('homeShortcut'),state.catalog.length?t('suggested'):t('allLessons'),state.catalog.length?t('suggestedSub'):'')}<div class="lesson-grid">${featured.length?featured.slice(0,6).map(card).join(''):'<div class="empty">'+esc(t('emptyCurriculum'))+'</div>'}</div></section><section class="section"><div class="cla-teaser"><div><span class="eyebrow">${esc(t('tools'))}</span><h2>${esc(t('cla'))}</h2><p>${esc(t('toolsClaDesc'))}</p></div><a class="button secondary" href="#/cla">${esc(t('claExplore'))} ↗</a></div></section>${footer()}`
}
function pageIntro(title,desc,count=''){return `<div class="page-intro"><div><div class="eyebrow">HANDBOOK / ${esc(t('programmes'))}</div><h1>${esc(title)}</h1><p>${esc(desc)}</p></div>${count?`<span class="status-pill">${count} ${esc(t('results'))}</span>`:''}</div>`}
function catalogue(area){const all=state.catalog.filter(m=>m.area===area).sort((a,b)=>a.id.localeCompare(b.id,'en',{numeric:true}));let groups=[...new Map(all.map(m=>[m.groupKey,m.group])).entries()];const validKeys=new Set(groups.map(x=>x[0]));if(state.currentArea!==area){state.search='';state.group='all';state.status='all';state.currentArea=area}else{if(!validKeys.has(state.group))state.group='all'};
 const title=areaTitle(area);const options=groups.map(([key,name])=>`<option value="${esc(key)}" ${state.group===key?'selected':''}>${esc(localText(name))}</option>`).join('');$('#main').innerHTML=`${pageIntro(title,areaDesc(area),all.length)}<div class="course-chips"><button class="chip ${state.group==='all'?'active':''}" data-group="all">${esc(t('allGroups'))}</button>${groups.map(([key,name])=>`<button class="chip ${state.group===key?'active':''}" data-group="${esc(key)}">${esc(localText(name))}</button>`).join('')}</div><div class="filters"><label class="search-wrap"><span class="sr-only">${esc(t('search'))}</span><span class="search-icon">⌕</span><input id="search" class="form-control" type="search" placeholder="${esc(t('search'))}" value="${esc(state.search)}"></label><select class="form-control" id="group-select" aria-label="${esc(t('allGroups'))}"><option value="all">${esc(t('allGroups'))}</option>${options}</select><select class="form-control" id="status-select" aria-label="${esc(t('allStatus'))}"><option value="all">${esc(t('allStatus'))}</option><option value="draft" ${state.status==='draft'?'selected':''}>${esc(t('draft'))}</option><option value="published" ${state.status==='published'?'selected':''}>${esc(t('published'))}</option><option value="planned" ${state.status==='planned'?'selected':''}>${esc(t('planned'))}</option></select></div><div class="catalog-count" id="catalog-count"></div><div class="lesson-grid" id="results"></div>${footer()}`;
 const update=()=>{let q=state.search.toLocaleLowerCase();let show=all.filter(l=>(state.group==='all'||l.groupKey===state.group)&&(state.status==='all'||l.status===state.status)&&[l.id,l.title.vi,l.title.en,l.group.vi,l.group.en].join(' ').toLocaleLowerCase().includes(q));$('#catalog-count').textContent=`${show.length} / ${all.length} ${t('results')}`;$('#results').innerHTML=show.length?show.map(card).join(''):`<div class="empty">${esc(t('noResults'))}</div>`;};
 $('#search').oninput=e=>{state.search=e.target.value;update()};$('#group-select').onchange=e=>{state.group=e.target.value;updateChips();update()};$('#status-select').onchange=e=>{state.status=e.target.value;update()};const updateChips=()=>{$$('[data-group]').forEach(b=>b.classList.toggle('active',b.dataset.group===state.group));$('#group-select').value=state.group};$$('[data-group]').forEach(b=>b.onclick=()=>{state.group=b.dataset.group;updateChips();update()});update()}
function srcLink(source,idx){const url=String(source?.url||'');if(!/^https:\/\//.test(url))return '';return `<a target="_blank" rel="noopener noreferrer" href="${esc(url)}">${esc(source.label||t('referencesSource')+(idx+1))} ↗</a>`}
function renderLessonEvidence(detail){
 let html='';
 if(detail.figureReferences?.length)html+='<h3>'+(lang()==='vi'?'Hình trong tài liệu nguồn':'Figures in source documents')+'</h3>'+detail.figureReferences.map((figure,i)=>srcLink({url:figure.url,label:figure.caption+' · PDF '+figure.pdfPage},i)).join('');
 if(detail.sourceCoverage?.length){
  const labels=lang()==='vi'?['Nội dung','Trang PDF','Trạng thái']:['Topic','PDF pages','Status'];
  html+='<details class="source-coverage"><summary>'+(lang()==='vi'?'Bảng đối chiếu nội dung nguồn':'Source coverage')+'</summary><div class="table-scroll" tabindex="0" role="region" aria-label="'+labels[0]+'"><table><thead><tr>'+labels.map(label=>'<th scope="col">'+esc(label)+'</th>').join('')+'</tr></thead><tbody>'+detail.sourceCoverage.map(item=>'<tr><td>'+esc(item.topic)+'</td><td>'+esc((item.pdfPages||[]).join(', '))+'</td><td>'+esc(item.coverageStatus)+'</td></tr>').join('')+'</tbody></table></div></details>';
 }
 return html;
}
function lessonBody(meta,detail){
 if(detail.reader==='handbook-four-tabs'){renderMultiTabLesson(meta,detail);return}
 if(detail.reader==='core01-four-tabs'&&detail.id==='CORE-01'){renderCore01Lesson(meta,detail);return}
 if(detail.reader==='fpu16-four-tabs'&&detail.id==='FPU-16'){renderFpu16Lesson(meta,detail);return}
 document.title=localText(detail.title||meta.title)+' · UN Police Learning Hub';
 const sections=Array.isArray(detail.sections)?detail.sections:[];
 const isReadable=(detail.status==='draft'||detail.status==='published')&&sections.length>0;
 const toc=sections.map((s,i)=>`<a href="#sec-${i}" data-anchor="sec-${i}">${i+1}. ${esc(localText(s.title))}</a>`).join('');
 const refs=[...(detail.references||[])];
 if(!refs.length&&meta.sourceUrl)refs.push({label:t('referencesSource'),url:meta.sourceUrl});
 const hasQuiz=Array.isArray(detail.quiz)&&detail.quiz.length>0;
 const missingEnglish=lang()==='en'&&(!detail.summary?.en||sections.some(s=>!s.body?.en||!s.title?.en));
 $('#main').innerHTML=`<div class="button-row" style="margin-bottom:18px"><a class="text-link" href="#/${meta.area}">← ${esc(t('back'))}</a></div>
  <div class="reader-grid">
   <aside class="toc"><div class="toc-label">${esc(t('contents'))}</div><a href="#intro" data-anchor="intro">${esc(t('introduction'))}</a>${toc}${isReadable&&hasQuiz?`<a href="#assessment" data-anchor="assessment">${esc(t('assessment'))}</a>`:''}<a href="#references" data-anchor="references">${esc(t('references'))}</a></aside>
   <article class="reader">
    <header class="reader-head" id="intro"><div class="lesson-meta" style="justify-content:flex-start;gap:10px"><span class="lesson-id">${esc(detail.id)}</span>${statusBadge(detail.status)}${completionBadge(detail.id)}</div><h1>${esc(localText(detail.title||meta.title))}</h1><p>${esc(sectionGroup(meta))} · ${esc(meta.minutes)} ${esc(t('minute'))}</p>${isReadable?`<p style="margin-top:13px">${esc(localText(detail.summary))}</p>`:''}</header>
    <div class="reader-body">
     ${isReadable?`<div class="notice">${esc(t('draftCaution'))}</div>${missingEnglish?'<p class="notice language-notice">This lesson is available in Vietnamese. The English translation is not yet complete.</p>':''}
      ${sections.map((s,i)=>`<section class="reader-section" id="sec-${i}"><h2>${lineTitle(s.title)}</h2>${textBody(s.body)}</section>`).join('')}
      ${hasQuiz?`<section class="reader-section" id="assessment"><h2>${esc(t('assessment'))}</h2>${renderQuestions(detail.quiz)}</section>`:''}
      <div class="button-row" style="margin-top:20px"><button class="button secondary" id="toggle-progress">${state.completed.includes(detail.id)?'✓ '+esc(t('marked')):esc(t('markStudied'))}</button></div>`:
      `<div class="notice"><strong>${esc(t('underDevelopment'))}</strong><p>${esc(t('underDevelopmentDesc'))}</p></div>`}
     <section class="reader-section references" id="references"><h2>${esc(t('references'))}</h2>${renderLessonEvidence(detail)}${refs.map((ref,i)=>`<div class="reference-item">${srcLink(ref,i)}${ref.note?`<p>${esc(ref.note)}</p>`:''}</div>`).join('')||esc(t('referencesSource'))}</section>
    </div>
   </article>
  </div>${footer()}`;
 if(isReadable){$('#toggle-progress').onclick=()=>{state.completed=state.completed.includes(detail.id)?state.completed.filter(i=>i!==detail.id):[...state.completed,detail.id];safePut('hb5_completed',JSON.stringify(state.completed));updateCompletionBadges(detail.id);$('#toggle-progress').textContent=state.completed.includes(detail.id)?'✓ '+t('marked'):t('markStudied');notify(t('saved'))};if(hasQuiz)bindQuestions(detail)};
 $$('[data-anchor]').forEach(a=>a.onclick=e=>{e.preventDefault();document.getElementById(a.dataset.anchor)?.scrollIntoView({behavior:'smooth',block:'start'})})
}
function renderQuestions(qs){return qs.map((q,i)=>`<div class="quiz-item" data-quiz="${i}"><h3>${i+1}. ${esc(localText(q.question))}</h3>${q.options.map((opt,j)=>`<button class="quiz-choice" type="button" data-option="${j}"><b>${String.fromCharCode(65+j)}.</b> ${esc(localText(opt))}</button>`).join('')}<button class="button secondary tiny" data-check="${i}">${esc(t('checkAnswer'))}</button><div class="quiz-feedback" style="display:none" aria-live="polite"></div></div>`).join('')+`<div class="notice" id="quiz-score" style="display:none" aria-live="polite"></div>`}
function bindQuestions(detail){const answers={};const checks={};$$('[data-quiz]').forEach(block=>{const index=Number(block.dataset.quiz);$$('[data-option]',block).forEach(b=>b.onclick=()=>{answers[index]=Number(b.dataset.option);$$('[data-option]',block).forEach(x=>x.classList.toggle('selected',x===b));$('.quiz-feedback',block).style.display='none';});$('[data-check]',block).onclick=()=>{if(!(index in answers)){notify(t('chooseAnswer'));return};const question=detail.quiz[index],correct=answers[index]===question.correct;checks[index]=correct;const fb=$('.quiz-feedback',block);fb.classList.toggle('incorrect',!correct);fb.innerHTML=`<b>${esc(correct?t('correct'):t('incorrect'))}</b><br>${esc(localText(question.explanation))}`;fb.style.display='block';const answered=Object.keys(checks).length,score=Object.values(checks).filter(Boolean).length;if(answered===detail.quiz.length){let pct=Math.round(100*score/detail.quiz.length);state.scores[detail.id]={score,total:detail.quiz.length,percent:pct,date:new Date().toISOString().slice(0,10)};safePut('hb5_scores',JSON.stringify(state.scores));$('#quiz-score').textContent=`${t('quizResult')}: ${score}/${detail.quiz.length} (${pct}%)`;$('#quiz-score').style.display='block'}}})}
async function openLesson(id){
 const meta=state.catalog.find(x=>x.id===id);
 if(!meta){$('#main').innerHTML=`<div class="empty">${esc(t('notFound'))}<p><a href="#/home">${esc(t('returnHome'))}</a></p></div>`;return}
 const currentHash=location.hash;
 $('#main').innerHTML=`<div class="loading-screen" style="min-height:350px">${esc(t('lessonLabel'))}<span>${esc(t('update'))}…</span></div>`;
 try{
  let detail=state.details.get(id);
  if(!detail){
   const resource=meta.file+'?v='+encodeURIComponent(meta.contentVersion||'20261027-4tabs');
   const r=await fetch(resource,{cache:'no-store'});
   if(!r.ok)throw new Error(`${r.status} ${r.statusText}`);
   detail=await r.json();
   if(detail.id!==meta.id)throw new Error('Lesson ID mismatch');
   state.details.set(id,detail);
  }
  if(location.hash!==currentHash)return;
  lessonBody(meta,detail);
  placeSiteFooter();
 }catch(err){
  if(location.hash!==currentHash)return;
  $('#main').innerHTML=`<div class="empty"><h2>${esc(t('loadError'))}</h2><p>${esc(err.message)}</p><a href="#/${meta.area}">${esc(t('back'))}</a></div>`;
 }
}
function learningTools(){
 const cards=[{icon:'▤',route:'library',title:t('library'),desc:t('toolsLibraryDesc'),active:true},{icon:'◴',route:'learning',title:t('learning'),desc:t('toolsProgressDesc'),active:true},{icon:'✎',route:'cla',title:t('cla'),desc:t('toolsClaDesc'),active:false}];
 $('#main').innerHTML=`${pageIntro(t('toolsTitle'),t('toolsIntro'))}<div class="tools-directory">${cards.map(c=>`<a href="#/${c.route}" class="tool-card"><div class="tool-icon">${c.icon}</div><div class="tool-desc"><h2>${esc(c.title)}</h2><p>${esc(c.desc)}</p><span class="tool-status">${esc(c.active?t('toolsOpen'):t('claSoon'))} ↗</span></div></a>`).join('')}</div>${footer()}`;
}
function claPage(){
 const show=(key)=>state.language==='both'?`<span lang="en">${esc(DICT.en[key])}</span><span class="cla-translation" lang="vi">${esc(DICT.vi[key])}</span>`:esc(t(key));
 const topics=[['01',t('claReading')],['02',t('claListening')],['03',t('claWriting')],['04',t('claMock')]];
 $('#main').innerHTML=`<div class="cla-page"><a class="text-link" href="#/tools">← ${esc(t('backTools'))}</a><section class="cla-hero"><span class="eyebrow">${esc(t('claEyebrow'))}</span><span class="cla-coming">${esc(t('claSoon'))}</span><h1>${show('claTitle')}</h1><p>${show('claIntro')}</p></section><div class="cla-notice"><span aria-hidden="true">ⓘ</span> <span>${esc(t('claNotice'))}</span></div><div class="cla-topics">${topics.map(([num,title])=>`<article class="cla-topic"><span class="cla-num">${num}</span><h2>${state.language==='both'?`${esc(DICT.en[['claReading','claListening','claWriting','claMock'][Number(num)-1]])}<span class="cla-translation">${esc(title)}</span>`:esc(title)}</h2><p>${show('claModuleDesc')}</p><span class="topic-pending">${esc(t('claSoon'))}</span></article>`).join('')}</div></div>${footer()}`;
}
function library(){
 const sourceItems=Object.entries(state.sources);
 const note=lang()==='vi'?'Mô tả ngắn giới thiệu chủ đề và phạm vi từ danh mục, học liệu liên quan; không thay thế việc đọc, đối chiếu văn bản gốc.':'These brief topic and scope descriptions draw on the catalogue and related learning materials; consult the original documents for their full content.';
 const fallback=lang()==='vi'?'Mở tài liệu gốc để xem nội dung chi tiết.':'Open the original document for full details.';
 $('#main').innerHTML=`${pageIntro(t('library'),t('sourcesIntro'))}<p class="library-summary-note">${esc(note)}</p><div class="source-grid">${sourceItems.map(([key,v])=>`<article class="source-card"><span class="eyebrow">${esc(key.toUpperCase())}</span><h3>${esc(localText(v))}</h3><p class="source-summary">${esc(localText(state.sourceSummaries[key])||fallback)}</p>${srcLink({label:t('openSource'),url:v.url},0)}</article>`).join('')}</div>${footer()}`;
}
function myLearning(){const items=state.catalog.filter(x=>state.completed.includes(x.id));const drafted=state.catalog.filter(x=>x.status==='draft'||x.status==='published').length;$('#main').innerHTML=`${pageIntro(t('learning'),t('progressIntro'))}<div class="stats-grid">${stat(items.length,t('savedLessons'))}${stat(drafted,t('availableDrafts'))}${stat(state.catalog.length,t('indexCount'))}${stat(Object.keys(state.scores).length,t('assessment'))}</div><section class="section">${sectionHead(t('myProgress'),t('savedLessons'))}<div class="lesson-grid">${items.length?items.map(card).join(''):`<div class="empty">${esc(t('emptySaved'))}</div>`}</div></section><section class="section">${sectionHead(t('overview'),t('backup'),t('backupDesc'))}<div class="button-row"><button id="export" class="button secondary">↓ ${esc(t('export'))}</button><button id="reset" class="button secondary danger">${esc(t('reset'))}</button></div></section>${footer()}`;
 $('#export').onclick=()=>{const blob=new Blob([JSON.stringify({version:5,completed:state.completed,scores:state.scores},null,2)],{type:'application/json'});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='handbook-learning-progress.json';a.click();setTimeout(()=>URL.revokeObjectURL(a.href),3000)};$('#reset').onclick=()=>{if(confirm(t('resetConfirm'))){state.completed=[];state.scores={};safePut('hb5_completed','[]');safePut('hb5_scores','{}');myLearning()}}}
function notify(msg){$('.toast')?.remove();const el=document.createElement('div');el.className='toast';el.textContent=msg;document.body.append(el);setTimeout(()=>el.remove(),2300)}
function render(){const rt=route();document.documentElement.lang=state.language==='en'?'en':state.language==='both'?'en':'vi';document.title=(rt.page==='home'?'Handbook':t(rt.page in ICONS?rt.page:'home'))+' · UN Police Learning Hub';buildShell(rt.page);state.currentPage=rt.page;switch(rt.page){case 'home':home();break;case 'core':case 'fpu':case 'ipo':case 'advanced':catalogue(rt.page);break;case 'lesson':openLesson(rt.id);break;case 'library':library();break;case 'learning':myLearning();break;case 'tools':learningTools();break;case 'cla':claPage();break;default:home()}placeSiteFooter()}
async function init(){
 try{
  const [a,b,summaries]=await Promise.all([
   fetch('data/catalog.json?v=20261029-batch07',{cache:'no-cache'}),
   fetch('data/sources.json?v=20261029-batches02-05',{cache:'no-cache'}),
   fetch('data/source-summaries.json?v=20261029-batches02-05',{cache:'no-cache'}).then(r=>r.ok?r.json():{}).catch(()=>({}))
  ]);
  if(!a.ok||!b.ok)throw Error('Source files unavailable');
  const [cat,sources]=await Promise.all([a.json(),b.json()]);
  if(!Array.isArray(cat.lessons))throw Error('Invalid catalogue');
  state.catalog=cat.lessons;state.sources=sources;state.sourceSummaries=summaries||{};
  const validIds=new Set(state.catalog.map(x=>x.id));
  state.completed=state.completed.filter(id=>validIds.has(id));
  state.scores=Object.fromEntries(Object.entries(state.scores).filter(([id])=>validIds.has(id)));
  window.addEventListener('hashchange',()=>{render();scrollTo({top:0,behavior:'instant'})});
  render();
 }catch(e){
  $('#app').innerHTML=`<div class="loading-screen"><span style="font-size:22px;font-weight:700">${esc(t('errorTitle'))}</span><span>${esc(t('errorDesc'))}</span><span>${esc(e.message)}</span><button class="button secondary" onclick="location.reload()">${esc(t('retry'))}</button></div>`;
  console.error(e);
 }
}
init();
