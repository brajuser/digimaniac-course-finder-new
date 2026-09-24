/* =================== CONFIG — edit these =================== */
const CONFIG = {
  whatsappNumber: "919728899058",   // country code + number, no "+" or spaces
  callNumber: "+919728899058",
  // Google Apps Script Web App URL. Leave "" for demo mode (nothing is sent).
  sheetWebhookUrl: "https://script.google.com/macros/s/AKfycbz1xlHcff0vqCgyoj7yml1Ia7Se0i4koul3Icsq6UDIJu2XwppZtPx_8b-exuEvfC9wIw/exec",
  batches: [
    "9:00 – 10:30 AM",
    "10:30 AM – 12:00 PM",
    "12:00 – 1:30 PM",
    "2:00 – 3:30 PM",
    "3:30 – 5:00 PM",
    "5:00 – 6:00 PM"
  ],
};

const COURSES = {
  dm: {
    name: "Digital Marketing", short: "Digital Marketing", icon: "📈",
    tag: "SEO · Ads · Social", grad: "linear-gradient(145deg,#1D4ED8,#06B6D4)",
    online: true,          // ✅ online batch confirmed
    video: "",             // paste an .mp4 URL here for the course preview reel
    desc: "SEO, Google Ads, Meta Ads, social media marketing and analytics — run real campaigns on live projects.",
    tools: ["Google Ads","Meta Ads Manager","GA4","Search Console","SEMrush","AI tools"],
    learn: ["SEO & Google Search Console","Google Ads & Meta Ads campaigns","Social media & content marketing","Analytics & lead generation"],
    goals: [
      {id:"job", e:"💼", label:"Get a job", line:"Build a portfolio of live campaigns you can show in interviews"},
      {id:"freelance", e:"🧑‍💻", label:"Start freelancing", line:"Learn to find, pitch and manage your first paying clients"},
      {id:"business", e:"🏪", label:"Grow my own business", line:"Get more enquiries for your business with SEO and ads"},
      {id:"clients", e:"📊", label:"Run ads for clients", line:"Plan, launch and report Google & Meta ad campaigns end-to-end"}
    ]
  },
  gd: {
    name: "Graphic Designing", short: "Graphic Design", icon: "🎨",
    tag: "Photoshop · Illustrator", grad: "linear-gradient(145deg,#DB2777,#F59E0B)",
    online: true,          // ⚠️ verify online batch availability
    video: "",
    desc: "Design principles, social media creatives and branding using Photoshop, Illustrator, CorelDRAW and Canva.",
    tools: ["Photoshop","Illustrator","CorelDRAW","Canva"],
    learn: ["Design principles & typography","Social media creatives","Branding & logo design","Print & digital design projects"],
    goals: [
      {id:"agency", e:"🏢", label:"Job at a design agency", line:"Build a strong design portfolio for agency interviews"},
      {id:"freelance", e:"🧑‍💻", label:"Freelance design", line:"Create client-ready work you can sell as a freelancer"},
      {id:"social", e:"📱", label:"Social media creatives", line:"Design scroll-stopping posts, ads and reels covers"},
      {id:"branding", e:"✏️", label:"Branding & logos", line:"Design logos and complete brand identities"}
    ]
  },
  ve: {
    name: "Video Editing", short: "Video Editing", icon: "🎬",
    tag: "Premiere Pro · Reels", grad: "linear-gradient(145deg,#EA580C,#EF4444)",
    online: true,          // ⚠️ verify online batch availability
    video: "",
    desc: "Edit YouTube videos, reels and business promos in Adobe Premiere Pro with practical projects.",
    tools: ["Premiere Pro","YouTube editing","Reels & Shorts"],
    learn: ["Cutting, transitions & colour","YouTube & social media video","Business promotional videos","Practical editing projects"],
    goals: [
      {id:"youtube", e:"▶️", label:"YouTube / Reels editor", line:"Edit engaging YouTube videos, reels and shorts"},
      {id:"freelance", e:"🧑‍💻", label:"Freelance editing", line:"Build a showreel to win freelance editing clients"},
      {id:"events", e:"💍", label:"Wedding & event videos", line:"Edit cinematic wedding and event films"},
      {id:"job", e:"🏢", label:"Job at a production house", line:"Get job-ready with a professional editing portfolio"}
    ]
  },
  av: {
    name: "Animation & VFX", short: "Animation & VFX", icon: "✨",
    tag: "Motion · VFX", grad: "linear-gradient(145deg,#7C3AED,#2563EB)",
    online: true,          // ⚠️ verify online batch availability
    video: "",
    desc: "Animation, motion graphics, visual effects and digital storytelling through hands-on projects.",
    tools: ["Animation","Motion graphics","VFX","Compositing"],
    learn: ["Animation fundamentals","Motion graphics","Visual effects (VFX)","Digital storytelling"],
    goals: [
      {id:"films", e:"🎞️", label:"Films / OTT VFX", line:"Learn the VFX techniques used in films and web series"},
      {id:"motion", e:"🌀", label:"Motion graphics", line:"Create animated ads, explainers and titles"},
      {id:"animation", e:"🧸", label:"2D / 3D animation", line:"Bring characters and stories to life with animation"},
      {id:"gaming", e:"🎮", label:"Gaming", line:"Build a foundation for animation work in gaming"}
    ]
  }
};

const PROFILES = [
  {id:"12th", e:"🎓", label:"12th Pass", d:"Planning my next step after school"},
  {id:"college", e:"📚", label:"College Student", d:"Want a skill alongside my degree"},
  {id:"graduate", e:"🔎", label:"Graduate / Job Seeker", d:"Looking to get hired"},
  {id:"working", e:"💼", label:"Working Professional", d:"Upskilling or switching careers"},
  {id:"business", e:"🏪", label:"Business Owner", d:"Want to grow my business"}
];

const EARNINGS = [
  {id:"50k-1l", e:"🌱", label:"₹50K – 1 Lakh", d:"Your first big milestone", short:"₹1 Lakh"},
  {id:"1l-2l", e:"🚀", label:"₹1 – 2 Lakh", d:"Steady job or regular freelance clients", short:"₹2 Lakh"},
  {id:"2l-5l", e:"💰", label:"₹2 – 5 Lakh", d:"Senior role or multiple clients", short:"₹5 Lakh"},
  {id:"5l+", e:"👑", label:"₹5 Lakh+", d:"Own agency, business or top freelancer", short:"₹5 Lakh+"}
];
const JOURNEY = ["Course","About you","Goal","Earning","Batch","Unlock"];

const MODES = [
  {id:"offline", e:"🏫", label:"Offline", d:"Classroom at Kurukshetra centre"},
  {id:"online", e:"💻", label:"Online", d:"Live interactive classes"},
  {id:"notsure", e:"🤔", label:"Not sure yet", d:"Help me decide"}
];

const CTAS = [
  {id:"demo", e:"🎟️", label:"Free demo class", d:"We'll schedule on WhatsApp", btn:"🔓 Unlock & Book My Free Demo", sheet:"Book Free Demo Class"},
  {id:"syllabus", e:"📄", label:"Syllabus & fees", d:"On WhatsApp", btn:"🔓 Unlock & Get Syllabus on WhatsApp", sheet:"Syllabus & Fees on WhatsApp"},
  {id:"counsellor", e:"📞", label:"Counsellor call", d:"We call you back", btn:"🔓 Unlock & Request a Call Back", sheet:"Counsellor Call Back"}
];

/* =================== STATE =================== */
const S = { step:1, course:null, profile:null, goals:[], earning:null, mode:null, batch:null, cta:"demo", name:"", phone:"", skipped:false };
const params = new URLSearchParams(location.search);
const tracking = {};
["gclid","utm_source","utm_medium","utm_campaign","utm_term","utm_content"].forEach(k=>{ if(params.get(k)) tracking[k]=params.get(k); });
window.dataLayer = window.dataLayer || [];
const track = (event, extra={}) => window.dataLayer.push({event, course:S.course, step:S.step, ...extra});

const $ = s => document.querySelector(s);
const body = $("#quizBody");
const esc = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

/* =================== RENDER =================== */
function setHead(){
  const Q = 5;
  $("#stepLabel").textContent = S.step <= Q ? `Step ${S.step} of ${Q}` : (S.step === 6 ? "⏳ Only 1 step left" : "All done ✅");
  $("#stepHint").textContent = S.step <= Q ? ["Takes 30 seconds","Nice start!","Halfway there","Almost there","Last question"][S.step-1] : "";
  $("#backBtn").hidden = S.step === 1 || S.step === 7;
  $("#journey").innerHTML = JOURNEY.map((j,i)=>{
    const n=i+1, st = n < S.step ? "done" : n === S.step ? "cur" : "";
    return `<li class="${st} ${n===6?'goal':''}" data-jump="${n}"><span class="dot">${n<S.step?'✓':(n===6?'🎯':n)}</span>${j}</li>`;
  }).join("");
  $("#journey").querySelectorAll("li.done").forEach(li=>li.onclick=()=>{ if(S.step<7) go(+li.dataset.jump); });
  updateResume();
  const jt = $("#journeyBtnTxt");
  if(jt) jt.textContent = S.step === 1 ? "Start your ₹1 Lakh journey" : S.step <= 5 ? `Continue your journey · ${S.step}/5` : (S.step === 6 ? "Only 1 step left · fill the form" : "Your roadmap is unlocked");
}

function render(){
  setHead();
  const fn = [null, stepCourse, stepProfile, stepGoals, stepEarning, stepMode, stepResult, stepDone][S.step];
  body.innerHTML = `<div class="step">${fn()}</div>`;
  bind();
}

function stepCourse(){
  return `
  <h2 class="q-title">What do you want to learn?</h2>
  <p class="q-sub">Tap a course to start your journey</p>
  ${S.course ? "" : `<div class="cue"><b>👇</b> Start here: tap a course to begin your journey</div>`}
  <div class="courses ${S.course ? "" : "idle"}">
    ${Object.entries(COURSES).map(([k,v])=>`
      <button class="course ${S.course===k?'sel':''}" data-course="${k}" style="background:${v.grad}" aria-pressed="${S.course===k}">
        <span class="ico">${v.icon}</span>
        <small>${esc(v.tag)}</small>
        <strong>${esc(v.name)}</strong>
      </button>`).join("")}
  </div>`;
}

function stepProfile(){
  return `
  <h2 class="q-title">Which one describes you best?</h2>
  <p class="q-sub">So we can recommend the right batch and plan</p>
  <div class="opts two">
    ${PROFILES.map(p=>`
      <button class="opt ${S.profile===p.id?'sel':''}" data-profile="${p.id}">
        <span class="e">${p.e}</span><span><b>${esc(p.label)}</b><span class="d">${esc(p.d)}</span></span>
      </button>`).join("")}
  </div>`;
}

function stepGoals(){
  const c = COURSES[S.course];
  return `
  <h2 class="q-title">What's your goal with ${esc(c.short)}?</h2>
  <p class="q-sub">Pick the one that matters most to you</p>
  <div class="opts two">
    ${c.goals.map(g=>`
      <button class="opt ${S.goals.includes(g.id)?'sel':''}" data-goal="${g.id}">
        <span class="e">${g.e}</span><span><b>${esc(g.label)}</b></span>
      </button>`).join("")}
  </div>`;
}

function stepEarning(){
  return `
  <h2 class="q-title">How much do you want to earn?</h2>
  <p class="q-sub">Pick your earning target and we'll plan your road to it</p>
  <div class="opts two">
    ${EARNINGS.map(x=>`
      <button class="opt ${S.earning===x.id?'sel':''}" data-earning="${x.id}">
        <span class="e">${x.e}</span><span><b>${esc(x.label)}</b><span class="d">${esc(x.d)}</span></span>
      </button>`).join("")}
  </div>`;
}

function stepMode(){
  const c = COURSES[S.course];
  return `
  <h2 class="q-title">How would you like to learn?</h2>
  <p class="q-sub">Choose your mode and a batch time that suits you</p>
  <div class="opts three">
    ${MODES.map(m=>{
      const off = m.id==="online" && !c.online;
      return `<button class="opt ${S.mode===m.id?'sel':''} ${off?'disabled':''}" data-mode="${m.id}" ${off?'aria-disabled="true"':''}>
        <span class="e">${m.e}</span><span><b>${esc(m.label)}</b><span class="d">${off?'Not available for this course':esc(m.d)}</span></span>
      </button>`}).join("")}
  </div>
  ${S.mode ? `
  <div class="sublabel">Preferred batch time<small>Classes run Monday to Friday</small></div>
  <div class="chips">
    ${CONFIG.batches.map(b=>`<button class="chip ${S.batch===b?'sel':''}" data-batch="${esc(b)}">${esc(b)}</button>`).join("")}
    <button class="chip ${S.batch==='Flexible'?'sel':''}" data-batch="Flexible">I'm flexible</button>
  </div>` : ""}
  <div class="actions"><button class="btn" data-next ${S.mode && S.batch ? '' : 'disabled'}>See My Plan →</button></div>`;
}

function roadmapHTML(c, earn){
  return `
    <div class="road">
      <div><i>1</i><p><b>Learn ${esc(c.short)} the practical way</b><span>${esc(c.learn.slice(0,2).join(" · "))}</span></p></div>
      <div><i>2</i><p><b>Build your portfolio</b><span>Live projects and assignments you can show employers and clients</span></p></div>
      <div><i>3</i><p><b>Get your first opportunity</b><span>Internship, job interviews or your first paying client, with career guidance</span></p></div>
      <div><i>₹</i><p><b>Grow towards ${esc(earn.label)}</b><span>Keep building skills and clients to reach your target</span></p></div>
    </div>`;
}

function stepResult(){
  const c = COURSES[S.course];
  const prof = PROFILES.find(p=>p.id===S.profile);
  const mode = MODES.find(m=>m.id===S.mode);
  const cta = CTAS.find(x=>x.id===S.cta);
  const earn = EARNINGS.find(x=>x.id===S.earning);
  return `
  <div class="confetti" aria-hidden="true">${Array.from({length:18},(_,i)=>`<span style="--x:${(i*37)%100}%;--d:${(i%6)*0.12}s;--c:${["#FF6A2B","#FFB547","#16A34A","#2563EB","#DB2777","#7C3AED"][i%6]}"></span>`).join("")}</div>
  <div class="congrats">
    <div class="trophy">🏆</div>
    <h2 class="q-title">Congratulations! You've unlocked one of today's most in-demand skills</h2>
    <p class="q-sub">${c.icon} <b>${esc(c.name)}</b> could be your road to ${esc(earn.short)}</p>
  </div>
  <div class="plan-tags">
    <span>${c.icon} ${esc(c.short)}</span>
    <span>${prof.e} ${esc(prof.label)}</span>
    <span>💰 ${esc(earn.label)}</span>
    <span>${mode.e} ${esc(mode.label)}</span>
    <span>🕒 ${esc(S.batch)}</span>
  </div>

  <div class="last-step">
    <div class="ls-top"><span class="ls-badge">⏳ Only 1 step left</span></div>
    <b>Fill in the form below to unlock your ${esc(earn.short)} journey today</b>
    <span>Get your free personal roadmap and a free demo class. Our team will get in touch with you shortly.</span>
  </div>

  <form class="form lead-card" id="leadForm" novalidate>
    <div class="field" id="fName"><label for="name">Your name</label>
      <input id="name" autocomplete="name" placeholder="e.g. Rahul Sharma" value="${esc(S.name)}">
      <div class="err">Please enter your name</div></div>
    <div class="field" id="fPhone"><label for="phone">WhatsApp number</label>
      <div class="phone"><b>+91</b><input id="phone" inputmode="numeric" autocomplete="tel-national" maxlength="10" placeholder="10-digit mobile number" value="${esc(S.phone)}"></div>
      <div class="err">Enter a valid 10-digit mobile number</div></div>
    <div class="field"><label>I'd like to start with</label>
      <div class="cta-pick">
        ${CTAS.map(x=>`<button type="button" class="${S.cta===x.id?'sel':''}" data-cta="${x.id}"><span>${x.e}</span><b>${esc(x.label)}</b><small>${esc(x.d)}</small></button>`).join("")}
      </div>
    </div>
    <label class="consent" id="fConsent"><input type="checkbox" id="consent" checked> I agree to be contacted by DigiManiac on call and WhatsApp about courses.</label>
    <div class="err consent-err" id="consentErr">Please tick the box so our team can contact you.</div>
    <button class="btn block big-cta" type="button" id="submitBtn">${esc(cta.btn)} →</button>
    <div class="trust-line" style="margin-top:0"><span>🔒 Your details stay private</span><span>✅ No spam</span><span>🏅 ISO 9001:2015 Certified</span></div>
  </form>

  <div class="locked">
    <h4>🗺️ Your ${esc(earn.short)} roadmap</h4>
    <div class="locked-inner">${roadmapHTML(c, earn)}</div>
    <button type="button" class="lock-overlay" data-scrollform><span class="lock">🔒</span><b>Fill in the form above to unlock</b></button>
  </div>
  <p class="fine">Earnings depend on your skills, effort and the market. DigiManiac provides training and career guidance, not guaranteed income.</p>`;
}

function leadScore(){
  let s = 0;
  s += {working:2, graduate:2, business:2, college:1, "12th":1}[S.profile] || 0;
  s += {offline:2, online:1, notsure:0}[S.mode] || 0;
  s += {demo:3, counsellor:3, syllabus:1}[S.cta] || 0;
  s += S.batch && S.batch!=="Flexible" ? 1 : 0;
  return {points:s, label: s>=7 ? "Hot" : s>=4 ? "Warm" : "Cold"};
}

function payload(){
  const c = COURSES[S.course];
  const sc = leadScore();
  return {
    timestamp: new Date().toISOString(),
    name: S.name, phone: "+91" + S.phone,
    course: c.name,
    profile: PROFILES.find(p=>p.id===S.profile).label,
    goals: c.goals.filter(g=>S.goals.includes(g.id)).map(g=>g.label).join(", "),
    earning_goal: EARNINGS.find(x=>x.id===S.earning).label,
    mode: MODES.find(m=>m.id===S.mode).label,
    batch: S.batch,
    cta: CTAS.find(x=>x.id===S.cta).sheet,
    lead_score: sc.label, lead_points: sc.points,
    status: "New",
    landing_course_param: S.skipped ? S.course : "",
    ...tracking
  };
}

function waLink(text){ return `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`; }

function stepDone(){
  const p = payload();
  const sc = leadScore();
  const head = {demo:"Your free demo class request is in! 🎉", syllabus:"Your syllabus is on its way! 📄", counsellor:"A counsellor will call you shortly 📞"}[S.cta];
  const sub = {
    demo:`Our team will message you on WhatsApp at <b>+91 ${esc(S.phone)}</b> to schedule your free ${esc(p.course)} demo class.`,
    syllabus:`We're sending the ${esc(p.course)} syllabus and fee details to <b>+91 ${esc(S.phone)}</b> on WhatsApp.`,
    counsellor:`Our counsellor will call <b>+91 ${esc(S.phone)}</b> to guide you on ${esc(p.course)}.`
  }[S.cta];
  const msg = `Hi DigiManiac, I'm ${S.name}. I'm interested in the ${p.course} course (${p.mode}, ${p.batch}). ${S.cta==="demo" ? "I'd like to book a free demo class." : S.cta==="syllabus" ? "Please share the syllabus and fee details." : "Please call me back."}`;
  return `
  <div class="done">
    <div class="big">✓</div>
    <h2 class="q-title">${head}</h2>
    <p class="q-sub" style="margin-bottom:0">${sub}</p>
    <div class="plan unlocked">
      <h4 style="margin-top:0">🔓 Your ${esc(EARNINGS.find(x=>x.id===S.earning).short)} roadmap is unlocked</h4>
      ${roadmapHTML(COURSES[S.course], EARNINGS.find(x=>x.id===S.earning))}
    </div>
    <div class="done-actions">
      <a class="btn wa" href="${waLink(msg)}" target="_blank" rel="noopener">💬 Chat with us on WhatsApp</a>
      <button class="btn ghost" data-restart>Explore another course</button>
    </div>
    <details class="team">
      <summary>For the team: data captured for the Google Sheet <span class="score ${sc.label.toLowerCase()}">${sc.label} lead · ${sc.points} pts</span></summary>
      <pre>${esc(JSON.stringify(p,null,2))}</pre>
    </details>
  </div>`;
}

/* =================== EVENTS =================== */
function go(n){ S.step = n; render(); track("quiz_step_view",{step:n}); const r=$("#finder").getBoundingClientRect(); if(r.top<64||r.top>innerHeight*0.4) $("#finder").scrollIntoView({behavior:"smooth",block:"start"}); }

function bind(){
  const advance = (n) => { render(); setTimeout(()=>go(n), 260); };
  body.querySelectorAll("[data-course]").forEach(b=>b.onclick=()=>{
    if(S.course!==b.dataset.course){ S.goals=[]; }
    S.course=b.dataset.course;
    if(!COURSES[S.course].online && S.mode==="online"){ S.mode=null; }
    track("quiz_course_select",{course:S.course}); advance(2);
  });
  body.querySelectorAll("[data-profile]").forEach(b=>b.onclick=()=>{
    S.profile=b.dataset.profile; track("quiz_profile_select",{profile:S.profile}); advance(3);
  });
  body.querySelectorAll("[data-goal]").forEach(b=>b.onclick=()=>{
    S.goals=[b.dataset.goal]; track("quiz_goal_select",{goal:S.goals[0]}); advance(4);
  });
  body.querySelectorAll("[data-earning]").forEach(b=>b.onclick=()=>{
    S.earning=b.dataset.earning; track("quiz_earning_select",{earning:S.earning}); advance(5);
  });
  body.querySelectorAll("[data-mode]").forEach(b=>b.onclick=()=>{ S.mode=b.dataset.mode; render(); });
  body.querySelectorAll("[data-batch]").forEach(b=>b.onclick=()=>{ S.batch=b.dataset.batch; if(S.mode) advance(6); else render(); });
  body.querySelectorAll("[data-scrollform]").forEach(b=>b.onclick=()=>{ $("#leadForm").scrollIntoView({behavior:"smooth",block:"center"}); setTimeout(()=>$("#name").focus({preventScroll:true}),500); });
  body.querySelectorAll("[data-cta]").forEach(b=>b.onclick=()=>{ saveFields(); S.cta=b.dataset.cta; render(); });
  body.querySelectorAll("[data-next]").forEach(b=>b.onclick=()=>{ if(!b.disabled) go(S.step+1); });
  body.querySelectorAll("[data-restart]").forEach(b=>b.onclick=()=>{ Object.assign(S,{course:null,profile:null,goals:[],earning:null,mode:null,batch:null,cta:"demo",skipped:false}); go(1); });
  const f = $("#leadForm");
  if(f){
    $("#phone").oninput = e => { e.target.value = e.target.value.replace(/\D/g,"").slice(0,10); };
    f.onsubmit = e => { e.preventDefault(); submitLead(); };
    $("#submitBtn").onclick = submitLead;
    f.querySelectorAll("input").forEach(i => i.onkeydown = e => { if(e.key === "Enter"){ e.preventDefault(); submitLead(); } });
  }
}

function saveFields(){
  if(!$("#leadForm")) return;
  S.name = $("#name").value.trim();
  S.phone = $("#phone").value.trim();
}

let submitting = false;
function submitLead(){
  if(submitting) return;
  saveFields();
  const okName = S.name.length >= 2;
  const okPhone = /^[6-9]\d{9}$/.test(S.phone);
  $("#fName").classList.toggle("bad",!okName);
  $("#fPhone").classList.toggle("bad",!okPhone);
  if(!(okName && okPhone)) return;
  const okConsent = $("#consent").checked;
  $("#consentErr").style.display = okConsent ? "none" : "block";
  if(!okConsent) return;
  submitting = true; setTimeout(()=>{ submitting = false; }, 3000);
  const data = payload();
  if(CONFIG.sheetWebhookUrl){
    fetch(CONFIG.sheetWebhookUrl,{method:"POST",mode:"no-cors",headers:{"Content-Type":"text/plain;charset=utf-8"},body:JSON.stringify(data)}).catch(()=>{});
  }
  track("lead_submit",{cta:S.cta, lead_score:data.lead_score});
  go(7);
}

$("#backBtn").onclick = () => { if(S.step>1) go(S.step-1); };

/* =================== BELOW-FOLD COURSE LIST =================== */
$("#courseList").innerHTML = Object.entries(COURSES).map(([k,v])=>`
  <div class="citem">
    <h3><span>${v.icon}</span>${esc(v.name)}</h3>
    <p>${esc(v.desc)}</p>
    <div class="tools">${v.tools.map(t=>`<span>${esc(t)}</span>`).join("")}</div>
    <button class="btn" data-start="${k}">Build my ${esc(v.short)} plan →</button>
  </div>`).join("");
document.querySelectorAll("[data-start]").forEach(b=>b.onclick=()=>{ S.course=b.dataset.start; S.goals=[]; go(2); });

/* =================== CONTACT LINKS =================== */
$("#callBtn").href = "tel:" + CONFIG.callNumber;
$("#waFloat").href = waLink("Hi DigiManiac, I'd like to know more about your courses.");

/* =================== HERO JOURNEY BUTTON =================== */
$("#journeyBtn").onclick = () => {
  track("journey_btn_click");
  $("#finder").scrollIntoView({behavior:"smooth",block:"start"});
  const c = document.querySelector(".courses");
  if(c && S.step === 1){ c.classList.remove("flash"); void c.offsetWidth; c.classList.add("flash"); }
};

/* =================== RESUME BAR (for visitors who scroll past) =================== */
let finderVisible = true;
function updateResume(){
  const bar = $("#resume"); if(!bar) return;
  const show = !finderVisible && S.step < 7 && window.scrollY > 400;
  bar.classList.toggle("show", show);
  bar.setAttribute("aria-hidden", String(!show));
  if(S.step === 1){ $("#resumeTxt").textContent = "🎯 Your ₹1 Lakh roadmap is waiting"; $("#resumeSub").textContent = "5 quick steps · takes 30 seconds"; $("#resumeBtn").textContent = "Start now ↑"; }
  else if(S.step <= 5){ $("#resumeTxt").textContent = `You're on step ${S.step} of 5`; $("#resumeSub").textContent = "Finish to get your free roadmap"; $("#resumeBtn").textContent = "Continue ↑"; }
  else { $("#resumeTxt").textContent = "⏳ Only 1 step left!"; $("#resumeSub").textContent = "Fill the form to unlock your roadmap"; $("#resumeBtn").textContent = "Fill form ↑"; }
}
new IntersectionObserver(([e])=>{ finderVisible = e.isIntersecting; updateResume(); },{threshold:0.15}).observe($("#finder"));
addEventListener("scroll", updateResume, {passive:true});
$("#resumeBtn").onclick = () => { track("resume_click"); const f=$("#leadForm"); (f||$("#finder")).scrollIntoView({behavior:"smooth",block:f?"center":"start"}); };

/* =================== INIT (Google Ads deep link) =================== */
const pre = params.get("course");
if(pre && COURSES[pre]){ S.course = pre; S.skipped = true; S.step = 2; track("quiz_deeplink",{course:pre}); }
render();
track("quiz_start");
