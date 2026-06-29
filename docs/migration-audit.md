# BLINIQ Website — Content Migration Audit Report

This audit evaluates the content database templates of the legacy WordPress website export, classifying core pages, procedure routes, landing pages, and detecting spam or demo placeholder assets.

---

## 1. Page Counts & Classifications

* **Total Records in Export**: 143
* **Breakdown by WordPress Post Type**:
  * **doctor**: 7
  * **page**: 117
  * **post**: 13
  * **service**: 6

---

## 2. Core Pages Audit

The following core pages were matched in the post database:

| Post ID | Title | Slug | Status |
|---|---|---|---|
| 8631 | About Bliniq | about-us | **MIGRATE** |
| 10 | Contact Us | contact-us | **DO NOT MIGRATE** (Demo address found) |
| 8759 | Appointment | appointment | **MIGRATE** |
| 8933 | Video Gallery | gallery | **MIGRATE** |
| 14971 | Picture Gallery | picture-gallery | **MIGRATE** |
| 12416 | Blog | blog-2 | **MIGRATE** |

---

## 3. Duplicate Detection & Recommendations

Several slugs are registered multiple times with numerical suffixes. Below is the deduplication strategy:

| Base Slug | ID | Title | post_type | Recommendation | Action |
|---|---|---|---|---|---|
| **face-lift** | 12261 | Face Lift | page | KEEP | Main procedure page |
| | 12313 | Face Lift | page | REDIRECT | 301 Redirect to `/procedures/face-lift` |
| **fat-injection** | 12306 | Fat Injection | page | KEEP | Main procedure page |
| | 12338 | Fat Injection | page | REDIRECT | 301 Redirect to `/procedures/fat-injection` |
| | 12361 | Fat Injection | page | DELETE | Redundant copy |
| **chin-implant** | 12288 | Chin Implant | page | KEEP | Main procedure page |
| | 12333 | Chin Implant | page | REDIRECT | 301 Redirect to `/procedures/chin-implant` |
| **tummy-tuck** | 12302 | Tummy Tuck | page | KEEP | Main procedure page |
| | 12348 | Tummy Tuck | page | REDIRECT | 301 Redirect to `/procedures/tummy-tuck` |
| **buccal-fat-pad-removal** | 12279 | Buccal Fat Pad Removal | page | KEEP | Main procedure page |
| | 12322 | Buccal Fat Pad Removal | page | REDIRECT | 301 Redirect to `/procedures/buccal-fat-pad-removal` |
| **dimple-creation-surgery** | 12282 | Dimple Creation Surgery | page | KEEP | Main procedure page |
| | 12324 | Dimple Creation Surgery | page | REDIRECT | 301 Redirect to `/procedures/dimple-creation-surgery` |
| **double-eyelid-surgery** | 12272 | Double Eyelid Surgery | page | KEEP | Main procedure page |
| | 12315 | Double Eyelid Surgery | page | REDIRECT | 301 Redirect to `/procedures/double-eyelid-surgery` |

---

## 4. Demo & Theme Content (DO NOT MIGRATE)

These pages contain placeholder profiles or dummy clinic divisions from the default WordPress theme and **must not be migrated**:

| Post ID | Title | Slug | Keyword Match | Status |
|---|---|---|---|---|
| 10585 | Dupree Black | dupree-black | `brooklyn` | **DO NOT MIGRATE** |
| 10596 | John Henry | john-henry | `brooklyn` | **DO NOT MIGRATE** |
| 10593 | Kiano Barker | kiano-barker | `brooklyn` | **DO NOT MIGRATE** |
| 7856 | Maria Andaloro | maria-andaloro | `brooklyn` | **DO NOT MIGRATE** |
| 10589 | Markus skar | markus-skar | `brooklyn` | **DO NOT MIGRATE** |
| 10580 | Michael Brian | michael-brian | `brooklyn` | **DO NOT MIGRATE** |
| 7665 | Richard Muldoone | richard-muldoone | `brooklyn` | **DO NOT MIGRATE** |
| 10 | Contact Us | contact-us | `brooklyn` | **DO NOT MIGRATE** |
| 15451 | Mole removal Delhi | mole-removal-delhi | `pathology` | **DO NOT MIGRATE** |
| 8222 | Cardiac Clinic | cardiac-clinic | `cardiology` | **DO NOT MIGRATE** |
| 7998 | Cardiology Clinic | cardiology-clinic | `cardiology` | **DO NOT MIGRATE** |
| 8230 | Laboratory Analysis | laboratory-analysis | `cardiology` | **DO NOT MIGRATE** |
| 8237 | Neurology Clinic | neurology-clinic | `cardiology` | **DO NOT MIGRATE** |
| 8234 | Pathology Clinic | pathology-clinic | `cardiology` | **DO NOT MIGRATE** |
| 8226 | Pediatric Clinic | pediatric-clinic | `cardiology` | **DO NOT MIGRATE** |

---

## 5. Spam / Hacked Content Detection

The following slots and gambling spam pages were detected in the database export and **must be deleted**:

| Post ID | Title | Slug | Keyword Match | Status |
|---|---|---|---|---|
| 14481 | Enjoy playing free slots online | enjoy-playing-free-slots-online | `casino` | **DELETE** |
| 14382 | Free Casino Games Online - Enjoy Playing Them and Earn Cash | free-casino-games-online-enjoy-playing-them-and-earn-cash | `casino` | **DELETE** |
| 14153 | Free Casino Slots | free-casino-slots | `casino` | **DELETE** |
| 14308 | Free Slot Machines - How You Can Enjoy the Game Without Spending a dime! </p> | free-slot-machines-how-you-can-enjoy-the-game-without-spending-a-dime | `casino` | **DELETE** |
| 14504 | Here's the essential information you need to be aware of when playing online slots | heres-the-essential-information-you-need-to-be-aware-of-when-playing-online-slots | `casino` | **DELETE** |
| 14259 | How to Find the Best Slot Machine Online | how-to-find-the-best-slot-machine-online | `casino` | **DELETE** |
| 14316 | How to Play Free Casino Slots Online | how-to-play-free-casino-slots-online | `casino` | **DELETE** |
| 14458 | Increase the Chance of winning by playing Slot Machine Games | increase-the-chance-of-winning-by-playing-slot-machine-games | `casino` | **DELETE** |
| 14151 | No Deposit Bonuses Could Help You Earn Real Money | no-deposit-bonuses-could-help-you-earn-real-money | `casino` | **DELETE** |
| 14201 | Online Slot Machine Game Guides | online-slot-machine-game-guides | `casino` | **DELETE** |
| 14326 | Play Free Online Casino Games | play-free-online-casino-games | `casino` | **DELETE** |
| 14505 | Play Money In Online Slots Reviews | play-money-in-online-slots-reviews | `casino` | **DELETE** |
| 14383 | Play the Bierhaus Slot Machine Online Free | play-the-bierhaus-slot-machine-online-free | `casino` | **DELETE** |
| 14427 | Playing Slot Machine Online | playing-slot-machine-online | `casino` | **DELETE** |
| 14339 | Receive Free Spins on Video Slots Machines | receive-free-spins-on-video-slots-machines | `casino` | **DELETE** |

---

## 6. Yoast SEO Metadata Report

Below is the focus keywords and metadata configured for core procedures:

| Post ID | Slug | Focus Keyword | Meta Description | Meta Title | Priority |
|---|---|---|---|---|---|
| 3200 | http-bliniq-in-about-us | `Home` | Best Liposuction Surgeon in Dheli. Liposuction Treatment At Bliniq clinic Liposuction Surgery Cost in South ...Liposuction treatment in Delhi at Aestiva Clinic removes fat from the body in an attempt to change its shape. Get in shape by Dr. Aswin |  | High |
| 12292 | gynecomastia-surgery-in-delhi | `gynecomastia surgery in Delhi` | Looking for gynecomastia surgery in Delhi? Look no further! Dr. Ashwini at Bliniq offers top-quality gynecomastia surgery at an affordable cost. | Gynecomastia Surgery in Delhi: Gynecomastia Cost | High |
| 14167 | gynecomastia-treatment-in-delhi | `gynecomastia treatment in Delhi` | Dr Ashwini at Bliniq offers the best gynecomastia treatment in Delhi. Get expert care and effective solutions for your gynecomastia concerns. | Best Gynecomastia Treatment in Delhi: Dr Ashwini | High |
| 14825 | liposuction-surgery-in-delhi | `liposuction surgery in Delhi` | Looking for liposuction surgery in Delhi? Look no further than Dr. Ashwini. Get the perfect body you've always desired with expert surgeon. | Liposuction Surgery in Delhi | Liposuction Surgeon | High |
| 15277 | what-is-hair-transplant | `what is hair transplant` | Understand what a hair transplant is, how the procedure works and how it helps restore natural hair growth. | What Is Hair Transplant? Procedure Explained | High |
| 15278 | how-to-remove-skin-tags-in-one-night | `how to remove skin tags in one night` | Learn possible ways to remove skin tags quickly, including home remedies and professional treatment options. | How to Remove Skin Tags in One Night | High |
| 15279 | how-much-does-full-body-laser-hair-removal-cost | `How Much Does Full Body Laser Hair Removal Cost` | Discover the cost of full body laser hair removal, including treatment sessions, pricing factors and expected results. | Full Body Laser Hair Removal Cost Guide | High |
| 15295 | how-to-remove-eye-bags-permanently | `how to remove eye bags permanently` | Discover effective ways to remove eye bags permanently, including treatments, skincare tips and lifestyle changes. | How to Remove Eye Bags Permanently | High |
| 15308 | what-is-prp-therapy-for-hair | `what is prp therapy for hair` | Learn about PRP therapy for hair, how it stimulates hair growth, its benefits, procedure, and expected results. | What is PRP Therapy for Hair? | Benefits, Cost & Results | High |
| 15309 | what-is-mesotherapy-for-face | `what is mesotherapy for face` | Discover mesotherapy for face, how it works, its benefits, cost, and why it’s popular for skin rejuvenation. | What is Mesotherapy for Face? | Benefits, Cost & Procedure | High |
| 15310 | how-to-remove-white-hair-permanently | `How to Remove White Hair Permanently` | Explore effective ways to remove white hair permanently with natural remedies, treatments, and preventive care tips. | How to Remove White Hair Permanently | Causes & Solutions | High |
| 15311 | is-chemical-peel-good-for-skin | `is chemical peel good for skin​` | Find out if chemical peel is good for your skin, its benefits, risks, and how it helps improve texture, tone, and glow. | Is Chemical Peel Good for Skin? | Benefits & Side Effects | High |
| 15312 | how-to-remove-moles-from-face | `how to remove moles from face` | Discover safe ways to remove moles from the face, including laser, surgical, and home remedies for clear and smooth skin. | How to Remove Moles from Face | Safe & Effective Treatments | High |
| 15313 | how-is-sex-change-surgery-done | `how is sex change surgery done` | Understand how sex change surgery is performed, including procedures, preparation, risks, and recovery for gender affirmation. | How is Sex Change Surgery Done? | Process, Steps & Recovery | High |
| 15314 | what-is-tummy-tuck-surgery | `what is tummy tuck surgery` | Learn what tummy tuck surgery is, how it works, its benefits, risks, and recovery process for achieving a flatter and toned abdomen. | What is Tummy Tuck Surgery? | Procedure, Benefits & Recovery | High |
| 15359 | how-much-does-laser-hair-removal-cost | `How Much Does Laser Hair Removal Cost` | Find out how much laser hair removal costs, factors affecting pricing, and what to expect during the treatment process. | Laser Hair Removal Cost | Price Guide & Treatment Details | High |
| 15371 | skin-tag-removal-cost | `skin tag removal cost` | Learn about skin tag removal cost, treatment options, and factors affecting pricing for safe and effective removal. | Skin Tag Removal Cost | Price, Methods & Factors Explained | High |
| 15376 | lipoma-removal-cost | `Lipoma Removal Cost` | Learn about lipoma removal cost, treatment methods, and recovery details for safe and effective removal. | Lipoma Removal Cost | Surgery Price, Procedure & Recovery | High |
| 15384 | ffs-surgery-india-facial-feminization | `FFS surgery India (facial feminization)` | Explore FFS surgery in India with cost, procedures, recovery, and best surgeons for facial feminization transformation. | FFS Surgery in India – Facial Feminization Cost & Procedure Guide | High |
| 15385 | thigh-lift-surgery-delhi | `Thigh Lift Surgery Delhi` | Improve leg contour with thigh lift surgery in Delhi. Check cost, procedure details, recovery, and top surgeons. | Thigh Lift Surgery in Delhi – Cost, Procedure & Results | High |
| 15386 | otoplasty-surgery-delhi | `Otoplasty Surgery Delhi` | Correct ear shape with otoplasty surgery in Delhi. Learn about cost, procedure, recovery, and best cosmetic clinics. | Otoplasty Surgery in Delhi – Ear Reshaping Cost & Procedure | High |
| 15387 | arm-lift-surgery-india-brachioplasty-cost-india | `Arm Lift Surgery India / Brachioplasty Cost India` | Tighten sagging arms with arm lift surgery in India. Explore brachioplasty cost, procedure, recovery time, and expert surgeons. | Arm Lift Surgery in India – Brachioplasty Cost, Benefits & Recovery | High |
| 15388 | dimple-creation-surgery-delhi | `Dimple Creation Surgery Delhi` | Enhance your smile with dimple creation surgery in Delhi. Find cost, procedure details, recovery, and top cosmetic surgeons. | Dimple Creation Surgery in Delhi – Cost, Procedure & Results | High |
| 15389 | vaser-liposuction-delhi | `VASER liposuction Delhi` | Achieve precise body contouring with VASER liposuction in Delhi. Check cost, benefits, procedure steps, and expert clinics. | VASER Liposuction in Delhi – Cost, Procedure & Results | High |
| 15390 | mommy-makeover-surgery-delhi-cost | `Mommy Makeover Surgery Delhi / Cost` | Discover mommy makeover surgery in Delhi with detailed cost, procedures, benefits, and recovery tips for post-pregnancy body transformation. | Mommy Makeover Surgery in Delhi – Cost, Benefits & Recovery | High |
| 15391 | buccal-fat-removal-delhi | `Buccal Fat Removal Delhi` | Get a slimmer face with buccal fat removal in Delhi. Learn about cost, procedure, recovery time, and top cosmetic surgeons near you. | Buccal Fat Removal in Delhi – Cost, Procedure & Best Surgeons | High |
| 15392 | bbl-surgery-cost-india | `BBL surgery cost India` | Explore BBL surgery cost in India, including Brazilian Butt Lift pricing, procedure details, recovery, and top clinics for safe results. | BBL Surgery Cost in India – Brazilian Butt Lift Price & Guide | High |
| 15445 | vaser-lipo-cost-india | `VASER lipo cost India` | Learn about lipoma removal cost, treatment methods, and recovery details for safe and effective removal. | Lipoma Removal Cost | Surgery Price, Procedure & Recovery | High |
| 15446 | rhinoplasty-surgeon-delhi | `Rhinoplasty surgeon Delhi` | Consult experienced rhinoplasty surgeons in Delhi for nose reshaping surgery, improved facial balance, and natural-looking results. | Rhinoplasty Surgeon in Delhi – Nose Reshaping Experts | High |
| 15447 | post-bariatric-surgery-delhi | `Post bariatric surgery Delhi` | Transform your appearance after weight loss with post bariatric surgery in Delhi. Expert body contouring and skin tightening solutions. | Post Bariatric Surgery in Delhi – Body Contouring & Skin Tightening | High |
| 15448 | hymenoplasty-delhi | `Hymenoplasty Delhi` | Get discreet hymenoplasty surgery in Delhi with experienced surgeons. Learn about procedure, recovery, safety, and treatment cost. | Hymenoplasty in Delhi – Confidential & Safe Restoration Surgery | High |
| 15449 | inverted-nipple-surgery-delhi | `Inverted nipple surgery Delhi` | Correct inverted nipples with advanced surgery in Delhi. Get expert consultation, natural-looking results, and quick recovery options. | Inverted Nipple Surgery in Delhi – Safe Correction Procedure | High |
| 15450 | neck-liposuction-delhi | `Neck liposuction Delhi` | Achieve a sharper jawline with neck liposuction in Delhi. Learn about cost, procedure, recovery, and expert cosmetic surgeons. | Neck Liposuction in Delhi – Double Chin Removal & Contouring | High |
| 15451 | mole-removal-delhi | `Mole removal Delhi` | Looking for mole removal in Delhi? Get safe and effective treatment with advanced cosmetic procedures and expert skin specialists. | Mole Removal in Delhi – Safe & Advanced Skin Treatment | High |
| 15452 | scar-removal-surgery-delhi | `Scar Removal Surgery Delhi` | Get effective scar removal surgery in Delhi for acne scars, injury marks, and surgical scars. Consult experienced cosmetic surgeons today. | Scar Removal Surgery in Delhi – Advanced Treatment & Expert Care | High |
| 15473 | buffalo-hump-removal-surgery | `Buffalo hump removal surgery` | Remove excess fat from the upper back with buffalo hump removal surgery. Explore treatment options, recovery, and expert care. | Buffalo Hump Removal Surgery – Cost, Procedure & Recovery | High |
| 15490 | cosmetic-surgery-clinic-delhi | `Cosmetic surgery clinic Delhi` | Visit a leading cosmetic surgery clinic in Delhi for facial, body, and skin enhancement procedures performed by expert surgeons. | Cosmetic Surgery Clinic in Delhi – Advanced Aesthetic Treatments | High |
| 15491 | best-plastic-surgeon-in-delhi | `Best Plastic Surgeon in Delhi` | Find the best plastic surgeon in Delhi for advanced cosmetic and reconstructive procedures with safe treatment and natural results. | Best Plastic Surgeon in Delhi – Trusted Cosmetic Surgery Experts | High |
| 15492 | back-liposuction-cost-india | `Back liposuction cost India` | Know the back liposuction cost in India, including procedure details, benefits, recovery time, and top cosmetic surgery clinics. | Back Liposuction Cost in India – Fat Removal Surgery Guide | High |
| 15493 | labiaplasty-surgery-delhi | `Labiaplasty surgery Delhi` | Enhance comfort and confidence with labiaplasty surgery in Delhi. Discover procedure details, benefits, recovery, and expert surgeons. | Labiaplasty Surgery in Delhi – Expert Cosmetic Gynecology Care | High |
| 15521 | breast-reduction-surgery-delhi | `Breast reduction surgery Delhi` | Reduce discomfort and enhance confidence with breast reduction surgery in Delhi. Learn about cost, recovery, and expert care. | Breast Reduction Surgery in Delhi – Safe & Effective Procedure | High |

---

## 7. Featured Image Validation

Validation checks for featured images mapped inside `featured-images.csv`:

* **Mapped Images**: 31 records.
* **Validation Outcome**:
  * Uploads folders (`public/uploads/2019/**` through `2026/**`) are verified to exist.
  * Broken reference warnings: Mapped image IDs of demo-doctors (e.g., Dupree Black - thumbnail ID 7669) are marked as **DO NOT MIGRATE** because their parent pages are dummy theme content.
