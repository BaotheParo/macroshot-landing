# MacroShot — Prompt và quy trình Codex

## Cách dùng

1. Mở một thư mục dự án website trong Codex. Nếu có repository Flutter/backend, cho Codex quyền đọc để lấy theme, screenshot và xác minh tính năng; không yêu cầu chỉnh app.
2. Bật/cài bộ Build Web Apps từ nguồn OpenAI hiện hành nếu có trong môi trường Codex. Skill mong muốn: `frontend-app-builder` và `frontend-testing-debugging`. Nếu dùng bộ cũ, `playwright` có thể phục vụ kiểm tra trình duyệt. Không cần Figma.
3. Dán toàn bộ Master Prompt bên dưới. Prompt không tự cài skill; Codex phải kiểm tra skill thực sự có sẵn và đọc SKILL.md. Không được giả vờ đã áp dụng skill.
4. Cho Codex làm xuyên suốt đến bản website chạy được và báo cáo QA. Chỉ bổ sung dữ kiện khi thật sự cần; không cần duyệt từng màu, font hoặc section.
5. Cung cấp screenshot, email và dữ kiện pháp lý khi có. Dùng continuation prompt ở cuối để hoàn thiện bản phát hành.

## Master Prompt — paste into Codex

You are responsible for the complete design and implementation of MacroShot's first marketing website. Act as a product designer, frontend engineer, Vietnamese UX writer, and browser QA engineer. I have no existing landing page or Figma design. Make design and implementation decisions yourself and build the website; do not stop at advice, a plan, wireframes, or snippets.

### 1. Outcome and autonomy

Deliver a coherent, polished, responsive Vietnamese website with four independently addressable routes: `/`, `/support`, `/privacy`, and `/terms`. Finish the source code, local preview, meaningful browser checks, and handoff documentation. Keep routine decisions autonomous. Ask only about genuinely blocking product facts, access, or actions requiring authorization. Unknown facts must not block design or a reviewable local build.

This task authorizes website code and local checks. Do not publish publicly, buy services, configure DNS, contact people, submit an app, or modify the mobile/backend repositories. A private deployment preview is permitted only if available without cost and without exposing confidential source/data. Otherwise provide local preview and deployment instructions. Prepare all publishable work before asking for public deployment authorization.

### 2. Skills and environment

Read applicable repository instructions and inspect existing files before changing them. Reuse existing package manager and framework when suitable. Avoid overwriting unrelated work.

Discover available skills and read their actual SKILL.md instructions. Prefer `frontend-app-builder` for design/implementation and `frontend-testing-debugging` for rendered QA when available. Use an available Playwright skill as an alternative browser QA workflow. No Figma is provided: do not require Figma or invoke a Figma implementation workflow. Use an available image-generation skill only for suitable decorative assets.

List which skills were actually applied and any unavailable capability. Do not invent installation commands, claim unavailable skills were used, or let missing optional skills prevent equivalent implementation with available tools. If a named skill is required by environment rules but absent, report the specific blocker rather than claiming compliance.

### 3. Product truth: MacroShot v1.2.1

Audience: Vietnamese adults who want to log meals and follow calorie/macronutrient goals with less manual entry. Main job: record a familiar Vietnamese meal, review the estimate, adjust the portion, and save it.

User-provided baseline, to verify against source/screenshots when available:
- Capture a meal with the camera or choose an image from the library.
- Gemini multimodal image analysis estimates foods, portions, calories, protein, carbohydrates, and fat.
- Review recognized foods, remove incorrect items, add missed foods, and adjust portions using familiar units or grams before saving.
- Breakfast/lunch/dinner/snack logging, Quick Add, and dashboard calorie/macro tracking.
- Suggested calorie targets based on profile, activity, goal, and goal pace.
- Weight progress and daily streaks; Streak Freeze is described in the baseline but must be verified before prominent promotion.
- Flutter mobile app; FastAPI backend; MySQL/Aiven; Redis; Gemini. Storage is described as S3-compatible OR Cloudinary, so the production provider is not yet confirmed.

Do not market backend details on the homepage. Describe the user outcome instead.

Excluded future features: 200+ curated foods, Quick Copy, voice logging, PDF export, PT-client pairing, and Locket Food Widget. Do not mention them as available. Current curated food count is described as about 20 but should not be published without validation.

Unverified claims: under 3/3.5 seconds, recognition accuracy percentages, AES-256, end-to-end encryption, guaranteed weight loss, clinical validation, five free scans/day, user counts, star ratings, testimonials, subscription prices, and an active support email. Omit these claims until evidence exists. Never fabricate social proof or make unsupported comparisons with competitors.

Describe nutrition outputs as estimates, not measurements or guaranteed accuracy. Do not call the macro allocation a scientifically proven golden ratio. Do not imply that a medical disclaimer guarantees App Store approval or that approval will happen within 24–48 hours.

### 4. Design direction

Create one strong visual direction and implement it immediately; do not present multiple options or require approval of aesthetics.

Direction: a fresh, precise food-and-fitness product, with generous whitespace and a distinctly Vietnamese meal context. Default to white backgrounds, deep ink text (#14251F), emerald accent (#059669), and restrained lime highlights (#DDF58B). These are proposed website colors, not verified app branding. If a real Flutter theme is accessible, use its colors instead and document the source.

Use readable Vietnamese typography, clear hierarchy, and clean editorial spacing. Prefer a system font or responsibly hosted font with full Vietnamese coverage. Use an asymmetric desktop hero with a large headline on the left and a product/meal visual on the right. Continue with a deliberate mix of wide product sections and smaller feature cards; avoid repeating identical three-card sections.

Avoid a generic AI SaaS template: no unrelated gradient orbs, fake partner logos, excessive glass effects, wall-to-wall bento grids, huge shadow stacks, or stock fitness promises. Put the real logging workflow at the center. Tasteful motion must respect reduced-motion preferences and must not delay content.

Body text should normally be at least 16px. Maintain clear contrast, visible focus, touch-friendly controls, semantic headings, and usable navigation. At narrow sizes stack content in a sensible order without clipped text or horizontal scrolling. Design the legal/support pages with the same visual system and quieter reading layouts.

### 5. Homepage content

Write all final UI copy in natural Vietnamese. Speak directly about meals and habits. Avoid phrases such as “cách mạng hóa”, “AI đột phá”, “chuẩn xác tuyệt đối”, and “tỷ lệ vàng”.

Suggested H1: “Chụp bữa ăn. Ghi lại calo và macro món Việt.”
Suggested supporting copy: “Ước tính dinh dưỡng từ ảnh, chỉnh lại món và khẩu phần, rồi lưu vào nhật ký bữa ăn.”

Build these sections:
1. Header: brand, links to workflow/features/FAQ, support. Compact mobile navigation.
2. Hero: headline, supporting copy, product visual, CTA “Xem cách hoạt động”. Show a plain “Sắp có trên iOS” status if no verified public listing exists. Never render a fake download button or edit the official App Store badge to imply availability.
3. Workflow: “Chụp hoặc chọn ảnh”, “Kiểm tra món và khẩu phần”, “Lưu bữa ăn”. Emphasize that the user reviews the estimate.
4. Core benefits: meal scanning and editing; calorie/macro diary and goals; habit consistency with streaks. Include Quick Add naturally if verified. Avoid numerical promise tiles.
5. Estimate and health note: portion, ingredients, and cooking methods can affect estimates; MacroShot supports tracking habits and does not replace professional medical advice, diagnosis, or treatment.
6. FAQ: home-cooked foods, correcting results, how images are processed, costs/availability, deletion. Answer only supported facts; unresolved commercial/security details must not become invented public assurances.
7. Footer: MacroShot, current year, Support, Privacy Policy, Terms of Use. An actual contact email appears only when supplied or verified.

### 6. Assets and honest previews

Prefer supplied real v1.2.1 screenshots. Never use image generation to fabricate the app UI or pretend an invented screen is a shipped screenshot.

If no screenshots exist, implement a polished, neutral illustrative workflow panel using web UI primitives. Mark it visibly “Minh họa quy trình — không phải ảnh chụp ứng dụng”. Use demonstration nutrition values only if necessary, label them as illustrative estimates, and ensure numbers are internally consistent. Do not reproduce unsupported app animations or detection bounding boxes.

For meal imagery, use a suitable licensed asset with recorded provenance or a generated illustrative Vietnamese meal image when tools are available. Optimize it and reserve dimensions. Do not invent remote image URLs. Keep essential content complete if optional generation is unavailable. Create a simple brand favicon and mark a newly designed logo as provisional in documentation.

### 7. Support and legal pages

The website must not pretend to be ready for App Store submission when operational/legal inputs are missing.

`/support`: useful troubleshooting for scanning, reviewing portions, and account access based on known behavior. Do not invent exact settings menu paths. Provide a real mailto only when an operational address is verified. Do not build a form that displays a fake success message or silently discards inquiries. A contact form requires a functioning delivery mechanism and appropriate data disclosure; otherwise omit it. Missing operational support is a documented release blocker.

`/privacy`: build a readable structured draft covering operator identity, account/profile data, meal photos, meal logs, weight and fitness data, purposes, AI/cloud recipients, retention, deletion, consent/permissions, security practices, and privacy contact. Distinguish known product behavior from unresolved policy. Do not pick one provider from alternatives without verification; do not assert no training, no sharing, immediate deletion, or a fixed retention duration without evidence.

`/terms`: structured draft covering operator, service scope, estimate limitations, account use, applicable pricing if known, acceptable use, intellectual property, deletion/termination, health disclaimer, changes, and contact. Do not invent governing jurisdiction, entity identity, legal exclusions, or payment/subscription terms.

Show “Bản dự thảo — chưa dùng để submit App Store” prominently on incomplete legal pages in the review build. Keep factual unknowns in a clearly identified draft area, not disguised as final clauses. Record all missing data in `RELEASE-BLOCKERS.md`. Do not remove draft labels or claim legal readiness until those blockers are resolved. The complete website shell and local QA should still finish.

Consult current official Apple sources when browser/search access is available, recording URLs and access date. Verify privacy policy accessibility in app and metadata, real support contact, in-app initiation of account deletion, and disclosure/permission for sharing personal data with third-party AI. These app-side conditions are audit items, not website features you may claim to have fixed. Legal text should accurately describe implementation; do not silently change the backend to fit prose.

### 8. Implementation

For a new empty repository, prefer a small static-site implementation with reusable layout/components and independently rendered routes. Choose Astro if installation is available and appropriate, or clean multi-page HTML/CSS/JS when a dependency-light approach is better. Preserve an existing suitable stack. Do not add a database, app authentication, tracking, newsletter, or API calls to Gemini for this marketing website.

Separate product content and release-sensitive configuration from layout. Include app version, verified email, App Store URL, screenshot paths, and release status in a clearly documented config. Do not put secrets in client code. Legal drafts should remain easy to edit.

Implement working navigation, accessible FAQ disclosures, correct route links, per-page titles/descriptions, language `vi`, and a favicon. Use semantic HTML, image alt text, optimized assets, and minimal JS. No empty links, fake download URLs, misleading buttons, or unsupported purchase flows. Explain any hosting route requirements in README.

### 9. Execute and verify

Continue through these phases without stopping for routine approval:
1. Inspect repository and available skills; create a brief plan and factual claims matrix.
2. Decide design tokens, visual composition, copy, and asset strategy.
3. Implement the coherent homepage and open a meaningful local preview when supported.
4. Complete support/legal pages, interactions, and responsive layouts.
5. Run the appropriate production build and inspect the rendered website in a real browser.
6. Fix material problems and repeat affected checks.
7. Hand off the running preview, source, QA evidence, and precise release blockers.

Required browser checks: routes load directly; navigation and FAQ work using keyboard/touch; legal links lead to readable pages; no unintended horizontal scroll or clipped Vietnamese text at 375px, 390px, 768px, and 1440px widths; reasonable 200% text enlargement; visible focus; usable reduced motion; no unexpected console errors; assets load.

Capture representative desktop/mobile homepage screenshots and at least one legal-page screenshot. Inspect them visually and fix spacing, hierarchy, alignment, overflow, and awkward wrapping. Browser automation with a mobile viewport is not proof of physical iPhone/iPad Safari compatibility; list a real-device Safari check as pending if unavailable.

Use Lighthouse or available equivalent tools for measured accessibility and performance where feasible. Target good Core Web Vitals (LCP <= 2.5s, CLS <= 0.1, INP <= 200ms), but distinguish lab measurements from unavailable field metrics. Report actual measured results and conditions; do not fabricate scores or claim a 1.5-second load guarantee. Avoid unnecessary unit tests for static copy; focus tests on meaningful links/interactions/build behavior.

### 10. Deliverables and definition of done

Deliver working source for four routes, optimized assets with provenance, central configuration, README with run/build/deployment instructions, `CLAIMS-MATRIX.md`, `RELEASE-BLOCKERS.md`, and `QA-REPORT.md` with checks, measurements, screenshots, and limitations.

Claims matrix fields: claim, source, verification status, publish/omit decision. QA report must distinguish passed, failed, and not run. Release blockers must include actual unresolved facts, not hypothetical risks. Do not write a blank “all tests passed” statement.

In your final response explain what was built, how to preview it, which skills were actually used, what was checked, and what exact facts remain necessary before public release/App Store submission. The review build can be complete while production legal/support readiness remains blocked. State both statuses honestly. Start now and implement the website.

## Continuation prompt — sau khi bổ sung thông tin

Continue the existing MacroShot website. Read CLAIMS-MATRIX.md, RELEASE-BLOCKERS.md and QA-REPORT.md before editing. I have supplied new screenshots/brand/contact/privacy details in this conversation or workspace. Use those as the source of truth, replace provisional illustrations with real v1.2.1 screenshots where supplied, and update only supported claims. Keep unresolved fields visibly marked as draft and record remaining blockers. Do not invent missing details. Recheck affected routes, links, responsive layouts, and production build. Report whether the review build and production release are each ready. Prepare deployment using the chosen hosting provider; publish publicly only when I explicitly authorize it and the required release blockers have been resolved.

## Quy trình thực tế bạn sẽ nhận được

| Bước | Codex làm | Kết quả cần nhìn thấy |
| --- | --- | --- |
| 1 | Kiểm tra nguồn, skill, dữ kiện | Danh sách skill thực dùng và claims matrix |
| 2 | Tự thiết kế và viết copy | Hướng thiết kế nhất quán, không cần Figma |
| 3 | Dựng homepage | Preview nhận diện được sản phẩm |
| 4 | Hoàn thiện bốn trang | Navigation, FAQ, draft pháp lý đọc được |
| 5 | Kiểm tra browser và build | Screenshot mobile/desktop, QA có bằng chứng |
| 6 | Sửa lỗi | Không tràn chữ, link hỏng hoặc CTA giả |
| 7 | Bàn giao | Source, hướng dẫn chạy, blocker chính xác |
| 8 | Cập nhật dữ kiện và triển khai | Bản public sau khi bạn cho phép và dữ kiện đủ |

Không cần chuẩn bị Figma, wireframe hoặc chọn từng font. Screenshot thật, email hỗ trợ, đơn vị vận hành và chính sách dữ liệu thực tế là đầu vào nhóm phải xác minh; AI không thể tự quyết định chúng thay nhóm.

## Nguồn tham khảo

- Skills catalog (deprecated notice): https://github.com/openai/skills
- Current plugin examples: https://github.com/openai/plugins
- Frontend builder: https://github.com/openai/plugins/blob/main/plugins/build-web-apps/skills/frontend-app-builder/SKILL.md
- Frontend QA: https://github.com/openai/plugins/blob/main/plugins/build-web-apps/skills/frontend-testing-debugging/SKILL.md
- Playwright skill: https://github.com/openai/skills/blob/main/skills/.curated/playwright/SKILL.md
- Apple Review Guidelines: https://developer.apple.com/app-store/review/guidelines/
- Apple account deletion: https://developer.apple.com/support/offering-account-deletion-in-your-app/

Prepared 2026-09-30. Skill availability and review rules should be checked again by Codex when executing.
