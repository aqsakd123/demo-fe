const allMySummonsAreGirls = {
  name: 'Awakening in the Stellar Abyss',
  link: `
  https://grok.com/chat/87fe1ca3-3797-40b0-9a71-843028d18015
  https://grok.com/chat/f2d5a5bb-8f56-4468-9f3f-5ab01e3d8c79
  `,

  worldBuilding:
    '500 years ago, the [Stellar Impact] happened when [Starfield], a giant place full of small worlds and [Warp Gates], hit Earth. It was a small bump for [Starfield], but a huge disaster for us—monsters came through [Gates], floods and earthquakes shook everything, and strange things appeared, like the [Shadow Isles] in South Africa, always dark. Now, people are used to [Starfield]. It gave humans [Aether Pulse], a special energy that powers [Fighters], [Mages], and rare [Starfield Callers] who go into [Starfield] to team up with creatures. Power levels are [Rookie], [Copper Bronze], [Black Iron], [White Silver], and [Yellow Gold], shown by the color of [Aether Pulse] glowing from you. [Ethan Carver] is a [Rookie Fighter] almost at [Copper Bronze]. He’s got a secret [Skill Box] that collects [Character Bits] from killing monsters or hitting big goals, and he’s already got three [Boosts].',

  // TODO
  // 1. Chuyển đổi hệ thống thành dạng [Evolution Status] (Có thể hiển thị nghi thức/ vật phẩm cần thiết để level up)
  // 2. update trong summary detail
  // 3. update trong terminology
  // 4. Thiết kế [Starfield Status]
  // 5. Thiết kế [Evolution Status]
  // 6. thống nhất status của main về [Rookie]
  chapters: [
    {
      chapterIndex: 1,
      title: 'The Power Test Day',
      // TODO: add detail to show the scene take place in a gymanatic test
      // reference chap 1-3 của The First Legendary Beast Master
      summaryDetail:
        'At [Aurora City], a school in America’s post-[Stellar Impact] ruins, students gather for the yearly [Power Test], two months before college exams. [Ethan Carver], an 18-year-old [Rookie Fighter], joins his classmates in a big room. They step onto a stage, pushing out [Aether Pulse]—[Copper Bronze] glows copper, [Black Iron] looks dark. Ethan’s glow hints at copper, showing he’s close to leveling up. [Jake Riley], his [Black Iron Fighter] friend, cheers him on, while [Lucas Kane], a [Copper Bronze Mage], grumbles. [Ms. Elena Voss], the teacher, mentions a [Starfield Caller] test. Narrator describe [Stellar Impact]—[Gates] opening, Earth in chaos. Then [Mr. Daniel Holt], a tall examiner, steps in, say thats there begin the test for spritual force of each inviduals and his eyes flash bright. Half the room collapses, dizzy or knocked out. Ethan, Jake, and a few others stay up, passing the [Spiritual Force] check. Ms. Voss picks them for more testing later.',
      terminology: [
        {
          name: '[Stellar Impact]',
          description:
            'When [Starfield] hit Earth 500 years ago and caused big trouble with [Gates].',
        },
        {
          name: '[Starfield]',
          description:
            'A big area with lots of little worlds and [Warp Gates] full of energy and creatures.',
        },
        {
          name: '[Power Test]',
          description:
            'A yearly check to see your [Aether Pulse] color—[Rookie], [Copper Bronze], [Black Iron], [White Silver], [Yellow Gold].',
        },
        {
          name: '[Starfield Caller]',
          description: 'People who go into [Starfield] to connect with its creatures.',
        },
        {
          name: '[Aether Pulse]',
          description: 'The energy inside you that glows different colors depending on your level.',
        },
        {
          name: '[Spiritual Force]',
          description:
            'A hidden strength in your mind, tested to see if you can be a [Starfield Caller].',
        },
        {
          name: '[Skill Box]',
          description:
            'Ethan’s secret tool that collects [Character Bits] from killing monsters or big wins to make [Boosts].',
        },
        {
          name: '[Character Bits]',
          description:
            'Pieces Ethan gets from killing monsters or achievements, used to build [Boosts], graded F to SSS.',
        },
        {
          name: '[Boosts]',
          description:
            'Power-ups made from [Character Bits], like [Quick Step], [Tough Skin], [Sharp Eye] Ethan already has.',
        },
      ],
      character: [
        {
          name: '[Ethan Carver]',
          description:
            'An 18-year-old [Rookie Fighter] almost at [Copper Bronze], has a [Skill Box] with three [Boosts]: [Quick Step], [Tough Skin], [Sharp Eye]. Stays standing in the [Spiritual Force] test and gets picked for a [Starfield Caller] check.',
          status: 'alive',
        },
        {
          name: '[Jake Riley]',
          description:
            'Ethan’s friend, a [Black Iron Fighter], cheers him during the [Power Test] and passes the [Spiritual Force] check.',
          status: 'alive',
        },
        {
          name: '[Lucas Kane]',
          description:
            'Ethan’s classmate, a [Copper Bronze Mage], grumbles about him but doesn’t pass the [Spiritual Force] test.',
          status: 'alive',
        },
        {
          name: '[Ms. Elena Voss]',
          description:
            'Teacher who runs the [Power Test], picks Ethan and others for the [Starfield Caller] test after the [Spiritual Force] check.',
          status: 'alive',
        },
        {
          name: '[Mr. Daniel Holt]',
          description:
            'Tall examiner who tests [Spiritual Force] with glowing eyes, knocks out half the room but Ethan and a few others pass.',
          status: 'alive',
        },
      ],
    },
    {
      chapterIndex: 2,
      title: 'The Special Room',
      // TODO: Đổi thành trước tiên giới thiệu, sau đó nêu một vài ví dụ về những trường hợp bị [Starfield] biến đổi thành quái vật
      // học sinh thắc mắc nếu bọn họ không muốn làm [Starfield Caller] thì sao
      // Ms.Voss cười đầy ẩn ý nhưng không trả lời
      // phát cho 1 cuốn sổ, bảo trong buổi trưa đọc, buổi chiều sẽ tiến hành liên kết connecting tới [Starfield]
      summaryDetail:
        'Ethan, Jake, and a few others follow [Ms. Elena Voss] into a quiet room under [Aurora City] after the [Power Test]. It’s packed with old [Starfield] stuff—broken orbs, dull swords—that she says are junk. She explains [Starfield Callers]: go in with your mind, weak but safe if you die—just sick for a bit—or body entry, strong but no redo if you’re done. [Starfield] has [Tale Zones] from scripts or stories, [Echo Realms] that like living in history but reset, and risky [Live Sectors] where is a Gate to real world like Earth. Finish a [Run], and you can grab stuff, graded F to SSS. Ethan connects it to school survival lessons. Ms. Voss warns that knowing too much about [Starfield] might pull you in while sleeping, so they sign a secrecy paper. Jake asks about [Live Sectors], curious but chill. Lucas cracks a joke about the trashy gear. Ethan signs, feeling his [Skill Box] twitch a little, already holding [Quick Step], [Tough Skin], and [Sharp Eye]. The next step’s coming, and he’s ready.',
      terminology: [
        {
          name: '[Stellar Impact]',
          description:
            'When [Starfield] hit Earth 500 years ago and caused big trouble with [Gates].',
        },
        {
          name: '[Starfield]',
          description:
            'A big area with lots of little worlds and [Warp Gates] full of energy and creatures.',
        },
        {
          name: '[Power Test]',
          description:
            'A yearly check to see your [Aether Pulse] color—[Rookie], [Copper Bronze], [Black Iron], [White Silver], [Yellow Gold].',
        },
        {
          name: '[Starfield Caller]',
          description: 'People who go into [Starfield] to connect with its creatures.',
        },
        {
          name: '[Aether Pulse]',
          description: 'The energy inside you that glows different colors depending on your level.',
        },
        {
          name: '[Spiritual Force]',
          description:
            'A hidden strength in your mind, tested to see if you can be a [Starfield Caller].',
        },
        {
          name: '[Skill Box]',
          description:
            'Ethan’s secret tool that collects [Character Bits] from killing monsters or big wins to make [Boosts].',
        },
        {
          name: '[Character Bits]',
          description:
            'Pieces Ethan gets from killing monsters or achievements, used to build [Boosts], graded F to SSS.',
        },
        {
          name: '[Boosts]',
          description:
            'Power-ups made from [Character Bits], like [Quick Step], [Tough Skin], [Sharp Eye] Ethan already has.',
        },
        {
          name: '[Tale Zone]',
          description: 'Places in [Starfield] made from stories, small and not complete.',
        },
        {
          name: '[Echo Realm]',
          description: 'Pieces of history in [Starfield] that reset after a while.',
        },
        {
          name: '[Live Sector]',
          description: 'Real places in [Starfield] with [Warp Gates], dangerous to visit.',
        },
        {
          name: '[Run]',
          description: 'A task in [Starfield]—finish it to take stuff back, graded F to SSS.',
        },
      ],
      character: [
        {
          name: '[Ethan Carver]',
          description:
            'An 18-year-old [Rookie Fighter] almost at [Copper Bronze], has a [Skill Box] with three [Boosts]: [Quick Step], [Tough Skin], [Sharp Eye]. Passed the [Spiritual Force] test in Chapter 1, now signs a secret paper and feels his [Skill Box] twitch.',
          status: 'alive',
        },
        {
          name: '[Jake Riley]',
          description:
            'Ethan’s friend, a [Black Iron Fighter], cheered him during the [Power Test] and passed the [Spiritual Force] check in Chapter 1. Now asks about [Live Sectors] and signs the secret paper.',
          status: 'alive',
        },
        {
          name: '[Lucas Kane]',
          description:
            'Ethan’s classmate, a [Copper Bronze Mage], grumbled about him during the [Power Test], didn’t pass the [Spiritual Force] test in Chapter 1. Now jokes about the junk and signs the secret paper.',
          status: 'alive',
        },
        {
          name: '[Ms. Elena Voss]',
          description:
            'Teacher who runs the [Power Test], picked Ethan and others for the [Starfield Caller] test after the [Spiritual Force] check in Chapter 1. Now explains [Starfield] rules and makes them sign a secret paper.',
          status: 'alive',
        },
        {
          name: '[Mr. Daniel Holt]',
          description:
            'Tall examiner who tested [Spiritual Force] with glowing eyes in Chapter 1, knocked out half the room but Ethan and a few others passed.',
        },
      ],
    },
    // TODO: Đổi thành trong ngày hôm sau
    {
      chapterIndex: 3,
      title: 'The First Tries',
      summaryDetail:
        'Back in the quiet room, [Ms. Elena Voss] fires up a [Warp Gate] using the [Starfield] junk. Three students step up to test their [Starfield Caller] skills. [Sara Miles] picks mind-only, disappearing into the gate. She comes back pale and tired but grinning, holding a [B-Rank] [Frost Bird]—a small, icy bird that sparkles. The room claps, impressed. Next, [Tyler Holt] chooses body entry, wanting to show off. He vanishes through the [Warp Gate], but a minute later, blood splashes out, followed by bug legs and guts—Tyler’s gone. Ms. Voss frowns, her [White Silver] [Aether Pulse] flaring as she burns the bugs to ash. She tells everyone to sit tight for a bit, explain that sometims this happen when an area in [Starfield] is swarmed by some species. 30m latter, letting the shock settle. Ethan watches, heart pounding, wondering about whether to take body entry. But he knows that his [Evolution System] take best when having a [Summon], and he must take this chance. Jake, unlike his usual bothersome, good him luck. Lucas stays quiet for once. The next move’s coming, and Ethan knows it’s his turn soon.',
      terminology: [
        {
          name: '[Stellar Impact]',
          description:
            'When [Starfield] hit Earth 500 years ago and caused big trouble with [Gates].',
        },
        {
          name: '[Starfield]',
          description:
            'A big area with lots of little worlds and [Warp Gates] full of energy and creatures.',
        },
        {
          name: '[Power Test]',
          description:
            'A yearly check to see your [Aether Pulse] color—[Rookie], [Copper Bronze], [Black Iron], [White Silver], [Yellow Gold].',
        },
        {
          name: '[Starfield Caller]',
          description: 'People who go into [Starfield] to connect with its creatures.',
        },
        {
          name: '[Aether Pulse]',
          description: 'The energy inside you that glows different colors depending on your level.',
        },
        {
          name: '[Spiritual Force]',
          description:
            'A hidden strength in your mind, tested to see if you can be a [Starfield Caller].',
        },
        {
          name: '[Skill Box]',
          description:
            'Ethan’s secret tool that collects [Character Bits] from killing monsters or big wins to make [Boosts].',
        },
        {
          name: '[Character Bits]',
          description:
            'Pieces Ethan gets from killing monsters or achievements, used to build [Boosts], graded F to SSS.',
        },
        {
          name: '[Boosts]',
          description:
            'Power-ups made from [Character Bits], like [Quick Step], [Tough Skin], [Sharp Eye] Ethan already has.',
        },
        {
          name: '[Tale Zone]',
          description: 'Places in [Starfield] made from stories, small and not complete.',
        },
        {
          name: '[Echo Realm]',
          description: 'Pieces of history in [Starfield] that reset after a while.',
        },
        {
          name: '[Live Sector]',
          description: 'Real places in [Starfield] with [Warp Gates], dangerous to visit.',
        },
        {
          name: '[Run]',
          description: 'A task in [Starfield]—finish it to take stuff back, graded F to SSS.',
        },
        {
          name: '[Frost Bird]',
          description: 'A [B-Rank] creature from [Starfield], a small bird with icy shine.',
        },
        { name: '[Warp Gate]', description: 'A way into [Starfield], powered by its old stuff.' },
      ],
      character: [
        {
          name: '[Ethan Carver]',
          description:
            'An 18-year-old [Rookie Fighter] almost at [Copper Bronze], has a [Skill Box] with three [Boosts]: [Quick Step], [Tough Skin], [Sharp Eye]. Passed the [Spiritual Force] test and signed a secret paper in earlier chapters. Now watches Sara and Tyler’s tries, waiting for his turn.',
          status: 'alive',
        },
        {
          name: '[Jake Riley]',
          description:
            'Ethan’s friend, a [Black Iron Fighter], cheered him during the [Power Test], passed the [Spiritual Force] check, and signed the secret paper in earlier chapters. Now mutters about Tyler’s bad luck.',
          status: 'alive',
        },
        {
          name: '[Lucas Kane]',
          description:
            'Ethan’s classmate, a [Copper Bronze Mage], grumbled about him during the [Power Test], didn’t pass the [Spiritual Force] test, but signed the secret paper in earlier chapters. Now stays quiet after Tyler’s death.',
          status: 'alive',
        },
        {
          name: '[Ms. Elena Voss]',
          description:
            'Teacher who runs the [Power Test], picked Ethan and others for the [Starfield Caller] test after the [Spiritual Force] check, explained [Starfield] rules, and made them sign a secret paper in earlier chapters. Now turns on the [Warp Gate] and burns bugs with [White Silver] power.',
          status: 'alive',
        },
        {
          name: '[Mr. Daniel Holt]',
          description:
            'Tall examiner who tested [Spiritual Force] with glowing eyes in Chapter 1, knocked out half the room but Ethan and a few others passed.',
        },
        {
          name: '[Sara Miles]',
          description:
            'A student who went mind-only into [Starfield], came back tired but happy with a [B-Rank] [Frost Bird].',
          status: 'alive',
        },
        {
          name: '[Tyler Holt]',
          description:
            'A student who went into [Starfield] with his body, got killed by bugs, and didn’t make it back.',
          status: 'dead',
        },
      ],
    },
    {
      chapterIndex: 5,
      title: 'Lost in the Starfield',
      summaryDetail:
        'Ethan lands in [Starfield], a wild swirl of lights and worlds. (Describe he see a glowing transparent status table infront of him, totally different from the [Evolution Status] -> Must be [Starfield Status]) (Descibe using a glass [See Through] - the school give it to him so he can see what world he"s going in, without it, he might go all random). He spots an [Echo Realm] first—a battlefield with cannons booming and soldiers dying, too risky, so he bails. Next, a [Tale Zone] hums with creepy chants—tentacles flop in a foggy sea, Cthulhu-style, and Ethan’s like, ‘Holy crap, I’m outta here!’ Then a [Live Sector]—its [Warp Gate] glows, guarded by light creatures. No way in, so he moves on. A strange tug pulls him to a faint [Tale Zone] light. He touches it—flashes hit: Little Red Riding Hood dying under a bridge, blind and dirty, a big wolf offers an apple she can’t grab. Wolf howls by smoky factories. Flashback—wolf eats deer by a fire, a soldier brags about industry, gold in saddlebags. Then—wolf flees grandma’s house, scared. Back to the girl dead, world fading. Ethan goes, ‘What the heck, this fairy tale’s messed up—smart wolf, tech, and that soldier’s from another story!’ Ethan thinks, but going there anyway.',
      terminology: [
        {
          name: '[Stellar Impact]',
          description:
            'When [Starfield] hit Earth 500 years ago and caused big trouble with [Gates].',
        },
        {
          name: '[Starfield]',
          description:
            'A big area with lots of little worlds and [Warp Gates] full of energy and creatures.',
        },
        {
          name: '[Power Test]',
          description:
            'A yearly check to see your [Aether Pulse] color—[Rookie], [Copper Bronze], [Black Iron], [White Silver], [Yellow Gold].',
        },
        {
          name: '[Starfield Caller]',
          description: 'People who go into [Starfield] to connect with its creatures.',
        },
        {
          name: '[Aether Pulse]',
          description: 'The energy inside you that glows different colors depending on your level.',
        },
        {
          name: '[Spiritual Force]',
          description:
            'A hidden strength in your mind, tested to see if you can be a [Starfield Caller].',
        },
        {
          name: '[Skill Box]',
          description:
            'Ethan’s secret tool that collects [Character Bits] from killing monsters or big wins to make [Boosts].',
        },
        {
          name: '[Character Bits]',
          description:
            'Pieces Ethan gets from killing monsters or achievements, used to build [Boosts], graded F to SSS.',
        },
        {
          name: '[Boosts]',
          description:
            'Power-ups made from [Character Bits], like [Quick Step], [Tough Skin], [Sharp Eye], and now [Strong] for Ethan.',
        },
        {
          name: '[Tale Zone]',
          description:
            'Places in [Starfield] made from stories, small and not complete—like a twisted Little Red Riding Hood world.',
        },
        {
          name: '[Echo Realm]',
          description:
            'Pieces of history in [Starfield] that reset after a while—like a loud, deadly battlefield.',
        },
        {
          name: '[Live Sector]',
          description:
            'Real places in [Starfield] with [Warp Gates], dangerous to visit—guarded by light creatures.',
        },
        {
          name: '[Run]',
          description: 'A task in [Starfield]—finish it to take stuff back, graded F to SSS.',
        },
        {
          name: '[Warp Gate]',
          description:
            'A way into [Starfield], powered by its old stuff or guarded in some worlds.',
        },
      ],
      character: [
        {
          name: '[Ethan Carver]',
          description:
            'An 18-year-old [Rookie Fighter] almost at [Copper Bronze], has a [Skill Box] with three [Boosts]: [Quick Step], [Tough Skin], [Sharp Eye]. Passed the [Spiritual Force] test, signed a secret paper, killed a bug to gain an ‘S’ [Character Bits], and made [Strong] with 70% success in earlier chapters. Now enters [Starfield] with his body, explores three worlds, and steps into a weird [Tale Zone] with a dying Little Red Riding Hood.',
          status: 'alive',
        },
        {
          name: '[Jake Riley]',
          description:
            'Ethan’s friend, a [Black Iron Fighter], cheered him during the [Power Test], passed the [Spiritual Force] check, signed the secret paper, muttered about Tyler’s bad luck, and patted Ethan’s shoulder after the bug kill in earlier chapters.',
          status: 'alive',
        },
        {
          name: '[Lucas Kane]',
          description:
            'Ethan’s classmate, a [Copper Bronze Mage], grumbled about him during the [Power Test], didn’t pass the [Spiritual Force] test, signed the secret paper, stayed quiet after Tyler’s death, and muttered about Ethan’s luck in earlier chapters.',
          status: 'alive',
        },
        {
          name: '[Ms. Elena Voss]',
          description:
            'Teacher who runs the [Power Test], picked Ethan and others for the [Starfield Caller] test after the [Spiritual Force] check, explained [Starfield] rules, made them sign a secret paper, turned on the [Warp Gate], burned bugs with [White Silver] power, and tested students with one bug in earlier chapters.',
          status: 'alive',
        },
        {
          name: '[Mr. Daniel Holt]',
          description:
            'Tall examiner who tested [Spiritual Force] with glowing eyes in Chapter 1, knocked out half the room but Ethan and a few others passed.',
        },
        {
          name: '[Sara Miles]',
          description:
            'A student who went mind-only into [Starfield], came back tired but happy with a [B-Rank] [Frost Bird] in Chapter 3.',
          status: 'alive',
        },
        {
          name: '[Tyler Holt]',
          description:
            'A student who went into [Starfield] with his body, got killed by bugs, and didn’t make it back in Chapter 3.',
          status: 'dead',
        },
      ],
    },
    {
      chapterIndex: 5,
      title: 'Into the Tale Zone',
      summaryDetail:
        'Ethan steps into the [Tale Zone], landing in a sunny forest where Little Red Riding Hood’s story just kicked off. The wolf’s still a regular beast, not awake to its weird smarts yet. Time here’s wonky—this [Tale Zone] restarts randomly, Ethan learns from a glowing message in his [Starfield Status]. His [Run]: help Little Red live happily ever after, or let the wolf eat her and Grandma. Ethan picks option one : happy endings sound less messy. He starts hunting the wolf, trekking through bushes and creeks. Post-apocalypse rules mean he’s packing a gun, so when he spots the wolf napping by a tree, he fires. Bullets bounce off like rubber. He switches to fists, but soon he realize, the wolf’s untouchable. Then it yawns and swipes back, weak as a puppy. Ethan’s like, ‘Holy crap, invincible but lame?’ The wolf growls, ‘Back off, human,’ surprising him—it talks! Ethan chats it up, asking why it’s so tough yet so wimpy, but the wolf just shrugs, clueless about its own deal.',
      terminology: [
        {
          name: '[Tale Zone]',
          description:
            'Places in [Starfield] made from stories, small and not complete—like a twisted Little Red Riding Hood world that restarts randomly.',
        },
        {
          name: '[Skill Box]',
          description:
            'Ethan’s secret tool that collects [Character Bits] from killing monsters or big wins to make [Boosts].',
        },
        {
          name: '[Character Bits]',
          description:
            'Pieces Ethan gets from killing monsters or achievements, used to build [Boosts], graded F to SSS.',
        },
        {
          name: '[Boosts]',
          description:
            'Power-ups made from [Character Bits], like [Quick Step], [Tough Skin], [Sharp Eye], and [Strong] for Ethan.',
        },
        {
          name: '[Starfield]',
          description:
            'A big area with lots of little worlds and [Warp Gates] full of energy and creatures.',
        },
      ],
      character: [
        {
          name: '[Ethan Carver]',
          description:
            'A [Rookie Fighter] almost at [Copper Bronze], has a [Skill Box] with four [Boosts]: [Quick Step], [Tough Skin], [Sharp Eye], [Strong]. Enters a [Tale Zone] to help Little Red Riding Hood, fights an invincible but weak wolf.',
          status: 'alive',
        },
        {
          name: '[Wolf]',
          description:
            'A talking wolf from the Little Red Riding Hood [Tale Zone], invincible but weak as a normal wolf, unaware of its own powers.',
          status: 'alive',
        },
      ],
    },
    // TODO
    // Ethan warning Grandma + Little Red. They beg for him to save 'em
    // Since [Character Bits] changes to [Evolutional System], change to catched the wolf, but a fews minute after the wolf is catched, a glitch happens.
    // Else where, the Little Red meet the wolf
    // The Wolf had been surpassed 3 times re-incarnation...
    {
      chapterIndex: 6,
      title: 'The Hunter’s Arrow',
      summaryDetail:
        'Ethan’s pumped at first—this wolf can’t be hurt, which sounds awesome—but then he gets antsy, thinking it might just be a fake power stuck in this [Tale Zone]. Normally, folks here get crazy boosts, no explanation needed—like turning invisible or smashing stuff —but this wolf only talks, no [Disguise] like Ethan hoped when he picked this spot. (Normally these should be considered [Skill], but in this case, more likely this is just a glitch or somethings)Still, being invincible is huge. Problem is, it could be a glitch, just the [Tale Zone] being sloppy, not a real thing outside this story mess. While he’s chewing on that, an arrow zips in and clips the wolf’s leg—it yowls and runs off. A scruffy hunter shows up, crossbow ready. The wolf run. After a few talk, the hunter pointing Ethan to Grandma’s house a mile away and griping about quiet woods. Ethan swaps a knife—he’s got three—for the guy’s crossbow and some rope, hoping it’s special. Nope, just regular stuff. He waits outside Grandma’s, shoots the wolf when it sneaks by—arrow flops off. He guesses only hunters can hit it, maybe the story’s rules. Using [Character Bits] from his [Skill Box], he whips up [Hunter] and nails the wolf next try, feeling smug about cracking the code.',
      terminology: [
        {
          name: '[Tale Zone]',
          description:
            'Story-based spots in [Starfield], small and weird—like a Little Red Riding Hood place that resets randomly. Characters usually get cool powers, but some are off.',
        },
        {
          name: '[Skill Box]',
          description:
            'Ethan’s sneaky gadget that grabs [Character Bits] from wins or kills to make [Boosts].',
        },
        {
          name: '[Character Bits]',
          description:
            'Stuff Ethan collects from victories or dead monsters to build [Boosts], ranked F to SSS.',
        },
        {
          name: '[Boosts]',
          description:
            'Power-ups from [Character Bits], like [Quick Step], [Tough Skin], [Sharp Eye], [Strong], and now [Hunter] Ethan’s got.',
        },
        {
          name: '[Disguise]',
          description: 'A trick Ethan thought the wolf might have, but it doesn’t.',
        },
      ],
      character: [
        {
          name: '[Ethan Carver]',
          description:
            'A [Rookie Fighter] almost at [Copper Bronze], has a [Skill Box] with four [Boosts]: [Quick Step], [Tough Skin], [Sharp Eye], [Strong]. Jumps into a [Tale Zone] to save Little Red, mixes it up with an invincible wolf, makes [Hunter] after meeting a guy.',
        },
        {
          name: '[Wolf]',
          description:
            'A talking wolf from the Little Red Riding Hood [Tale Zone], can’t be hurt but fights weak, only hunters can touch it, runs after an arrow.',
        },
        {
          name: '[Hunter]',
          description:
            'A rough guy with a crossbow, knows the woods and Grandma’s place, tags the wolf with a shot.',
        },
      ],
    },
    // Main, again catched the wolf, decide whether should he kill it. If kill it,  might be a worse glitch error
    {
      chapterIndex: 7,
      title: 'Taming the Wolf',
      summaryDetail:
        'Ethan figures it out—the wolf’s tough skin is a [Tale Zone] trick, and only hunters can scratch it. He tracks it with [Hunter] to a creek, ties it up with rope and [Strong]—it squirms but can’t get loose. He sticks his arm out; it bites, but nothing happens, proving it’s no threat to him. The setup’s simple: hunters beat wolf, wolf beats Little Red and Grandma. He drags it to Grandma’s little house, busts in with a flashy [Aether Pulse]. Grandma yelps, Little Red stares. Ethan says, ‘This wolf’s bad news—stay back till I fix it.’ They’re freaked, asking him to take it out. He gives Little Red the crossbow, shows her how to shoot—she’s a quick learner, hitting a stump fast. He tells her to aim at the wolf; her arrow scratches it, and it whines, ‘I’m done,’ looking way too smart. Ethan wonders if Little Red as a hunter could shake things up. Grandma hands over some bread, still jittery but grateful, while Little Red’s all in with the crossbow. The wolf’s giving up feels fishy—too clever for this fairy tale gig.',
      terminology: [
        {
          name: '[Tale Zone]',
          description:
            'Story-based spots in [Starfield], small and weird—like a Little Red Riding Hood place that resets randomly. Hunters beat wolves, wolves beat Little Red here.',
        },
        {
          name: '[Skill Box]',
          description:
            'Ethan’s sneaky gadget that grabs [Character Bits] from wins or kills to make [Boosts].',
        },
        {
          name: '[Character Bits]',
          description:
            'Stuff Ethan collects from victories or dead monsters to build [Boosts], ranked F to SSS.',
        },
        {
          name: '[Boosts]',
          description:
            'Power-ups from [Character Bits], like [Quick Step], [Tough Skin], [Sharp Eye], [Strong], and [Hunter] Ethan’s got.',
        },
        {
          name: '[Aether Pulse]',
          description: 'Energy inside you that glows based on your level.',
        },
      ],
      character: [
        {
          name: '[Ethan Carver]',
          description:
            'A [Rookie Fighter] almost at [Copper Bronze], has a [Skill Box] with five [Boosts]: [Quick Step], [Tough Skin], [Sharp Eye], [Strong], [Hunter]. Helps Little Red in a [Tale Zone], ties up the wolf, teaches her to hunt.',
        },
        {
          name: '[Wolf]',
          description:
            'A talking wolf from the Little Red Riding Hood [Tale Zone], can’t be hurt except by hunters, gives up after Little Red’s shot.',
        },
        {
          name: '[Little Red Riding Hood]',
          description:
            'A kid in the [Tale Zone], picks up hunting fast from Ethan, scratches the wolf.',
        },
        {
          name: '[Grandma]',
          description:
            'Little Red’s grandma, lives in a [Tale Zone] house, spooked by Ethan but asks him to handle the wolf.',
        },
      ],
    },
    // Câu chuyện nên diễn biến tự nhiên hơn, tuy nhiên main vẫn muốn thử để Little Red trở thành thợ săn - tự huấn luyện
    {
      chapterIndex: 8,
      title: 'The Wolf’s Offer',
      summaryDetail:
        'The wolf throws Ethan a curveball—it wants to be his summon, eyes shining like it knows too much. It says this world’s a set story and it can sniff out another tale’s hero nearby—way more than a [Tale Zone] critter should know. Ethan figures it’s a mix-up from two stories crashing together. Little Red, now handy with her crossbow, gets excited to find this other hero. They head out, walking for days—Ethan teaches her to fish by the water and set traps in the woods. She’s good, catching rabbits quick. The wolf’s tied up but chill, tossing out odd hints about ‘other stories.’ Funny thing—the village stays right there in view, no matter how far they go, like the world’s stuck. Grandma sends them off with bread, starting to like Ethan. He keeps Little Red practicing, her shots getting dead-on. At night, they sit by the fire, swapping tips and tales—Little Red asks about his home, the wolf mumbles about hidden stuff. Something’s coming, and Ethan’s sure it’s tied to the wolf’s glitchy smarts.',
      terminology: [
        {
          name: '[Tale Zone]',
          description:
            'Story-based spots in [Starfield], small and weird—like a Little Red Riding Hood place mixed with another, making glitches like a smart wolf.',
        },
        {
          name: '[Skill Box]',
          description:
            'Ethan’s sneaky gadget that grabs [Character Bits] from wins or kills to make [Boosts].',
        },
        {
          name: '[Character Bits]',
          description:
            'Stuff Ethan collects from victories or dead monsters to build [Boosts], ranked F to SSS.',
        },
        {
          name: '[Boosts]',
          description:
            'Power-ups from [Character Bits], like [Quick Step], [Tough Skin], [Sharp Eye], [Strong], and [Hunter] Ethan’s got.',
        },
      ],
      character: [
        {
          name: '[Ethan Carver]',
          description:
            'A [Rookie Fighter] almost at [Copper Bronze], has a [Skill Box] with five [Boosts]: [Quick Step], [Tough Skin], [Sharp Eye], [Strong], [Hunter]. Helps Little Red in a [Tale Zone], ties up the wolf, teaches her to hunt, hears the wolf’s offer.',
        },
        {
          name: '[Wolf]',
          description:
            'A talking wolf from the Little Red Riding Hood [Tale Zone], can’t be hurt except by hunters, wants to be Ethan’s summon, knows about stories and another hero.',
        },
        {
          name: '[Little Red Riding Hood]',
          description:
            'A kid in the [Tale Zone], picks up hunting fast from Ethan, wants to find another hero.',
        },
        {
          name: '[Grandma]',
          description:
            'Little Red’s grandma, lives in a [Tale Zone] house, spooked at first but now helps with food.',
        },
      ],
    },
    {
      chapterIndex: 9,
      title: 'The Cave Door',
      summaryDetail:
        'Ethan, Little Red, and the wolf wander into a cave where a soldier—the flashback guy—is arguing with a witch about treasure. She’d given him a raggedy magic cloth earlier, saying it’d handle the dogs inside. The soldier spots them and calls them over, saying there’s loot worth grabbing. They step in—dark, wet walls drip, the air’s musty, and a dim light flickers ahead. The soldier says it’s a three-room deal, dogs guarding coins, just like a story he knows. They hit the first room—a big copper-eyed dog snarls over a chest. It lunges at Ethan; he dodges with [Quick Step] and swings with [Hunter], keeping it busy. Little Red’s shaky but aims her crossbow, while the soldier tosses the cloth over the dog—it freezes up, eyes glazing over like it’s asleep, totally out of it. Ethan’s impressed but keeps an eye on the witch lurking back there, cackling about curses. The wolf sniffs the air, grumbling about odd vibes. They nab some copper coins and head deeper, the cave narrowing, light growing, and Ethan’s ready for whatever’s next in this creepy loot run.',
      terminology: [
        {
          name: '[Tale Zone]',
          description:
            'Story-based spots in [Starfield], small and weird—like a Little Red Riding Hood place mixed with The Tinderbox, causing glitches.',
        },
        {
          name: '[Skill Box]',
          description:
            'Ethan’s sneaky gadget that grabs [Character Bits] from wins or kills to make [Boosts], tracks [Run] results too.',
        },
        {
          name: '[Character Bits]',
          description:
            'Stuff Ethan collects from victories or dead monsters to build [Boosts], ranked F to SSS.',
        },
        {
          name: '[Boosts]',
          description:
            'Power-ups from [Character Bits], like [Quick Step], [Tough Skin], [Sharp Eye], [Strong], and [Hunter] Ethan’s got.',
        },
        {
          name: '[Run]',
          description: 'A job in [Starfield]—finish it to grab loot, graded F to SSS.',
        },
      ],
      character: [
        {
          name: '[Ethan Carver]',
          description:
            'A [Rookie Fighter] almost at [Copper Bronze], has a [Skill Box] with five [Boosts]: [Quick Step], [Tough Skin], [Sharp Eye], [Strong], [Hunter]. Helps Little Red in a [Tale Zone], ties up the wolf, teaches her to hunt, hears the wolf’s offer, starts cave run.',
        },
        {
          name: '[Wolf]',
          description:
            'A talking wolf from the Little Red Riding Hood [Tale Zone], can’t be hurt except by hunters, wants to be Ethan’s summon, knows about stories and another hero.',
        },
        {
          name: '[Little Red Riding Hood]',
          description:
            'A kid in the [Tale Zone], picks up hunting fast from Ethan, wants to find another hero, follows into cave.',
        },
        {
          name: '[Soldier]',
          description:
            'A guy from The Tinderbox [Tale Zone], has a magic cloth from the witch, wants industry boom with cave loot.',
        },
        {
          name: '[Witch]',
          description:
            'A lady in the cave, gave soldier a magic cloth, fights about loot, warns of curses.',
        },
      ],
    },
    {
      chapterIndex: 10,
      title: 'Dogs and Dreams',
      summaryDetail:
        'They push into the second room—bigger, with jagged stalactites overhead and a silver-eyed dog twice the size of the first, sitting on a pile of silver coins. It barks, loud enough to rattle the cave, and charges hard. Ethan jumps in with [Strong], slamming it back, while Little Red fires an arrow—it sticks, her hunter skills shining. The dog’s still snapping, so the soldier whips out his magic cloth and flings it over the beast. It flops down, eyes dull, like it’s knocked out cold—no fight left. The soldier’s jazzed, saying the silver’s a big step for his plans. Ethan asks, ‘What’s the deal with all this loot?’ The soldier grins, spilling his dream—kick off an industrial boom, make machines, flip the world upside down. Then the wolf pipes up, chatting with the soldier about gears and steam—tech stuff it shouldn’t know. Ethan’s floored—this glitchy mutt’s a tech nerd? The witch hollers from the shadows about curses again, but they shrug her off, snag the silver, and head for the third room, air thick and golden light glowing ahead.',
      terminology: [
        {
          name: '[Tale Zone]',
          description:
            'Story-based spots in [Starfield], small and weird—like a Little Red Riding Hood place mixed with The Tinderbox, causing glitches.',
        },
        {
          name: '[Skill Box]',
          description:
            'Ethan’s sneaky gadget that grabs [Character Bits] from wins or kills to make [Boosts], tracks [Run] results too.',
        },
        {
          name: '[Character Bits]',
          description:
            'Stuff Ethan collects from victories or dead monsters to build [Boosts], ranked F to SSS.',
        },
        {
          name: '[Boosts]',
          description:
            'Power-ups from [Character Bits], like [Quick Step], [Tough Skin], [Sharp Eye], [Strong], and [Hunter] Ethan’s got.',
        },
        {
          name: '[Run]',
          description: 'A job in [Starfield]—finish it to grab loot, graded F to SSS.',
        },
      ],
      character: [
        {
          name: '[Ethan Carver]',
          description:
            'A [Rookie Fighter] almost at [Copper Bronze], has a [Skill Box] with five [Boosts]: [Quick Step], [Tough Skin], [Sharp Eye], [Strong], [Hunter]. Helps Little Red in a [Tale Zone], ties up the wolf, teaches her to hunt, hears the wolf’s offer, fights dogs in cave.',
        },
        {
          name: '[Wolf]',
          description:
            'A talking wolf from the Little Red Riding Hood [Tale Zone], can’t be hurt except by hunters, wants to be Ethan’s summon, swaps tech talk with soldier.',
        },
        {
          name: '[Little Red Riding Hood]',
          description:
            'A kid in the [Tale Zone], picks up hunting fast from Ethan, wants to find another hero, shoots dog in cave.',
        },
        {
          name: '[Soldier]',
          description:
            'A guy from The Tinderbox [Tale Zone], has a magic cloth from the witch, wants industry boom with cave loot, chats tech with wolf.',
        },
        {
          name: '[Witch]',
          description:
            'A lady in the cave, gave soldier a magic cloth, fights about loot, warns of curses.',
        },
      ],
    },
    {
      chapterIndex: 11,
      title: 'The Gold Room',
      summaryDetail:
        'The third room’s massive—gold light bounces off the walls, and a giant gold-eyed dog sprawls over a heap of gold coins. It roars, shaking the whole cave, and leaps at them. Ethan dives in with [Strong], slamming it back, while Little Red’s arrows bounce off its hide—she’s tough but rattled. The soldier pulls out his magic cloth again, tossing it over the dog’s head. It stumbles, eyes fogging up, and flops down limp, out like a light. They catch their breath, grinning at the loot. Little Red spots a magic lighter on a rocky shelf and grabs it—Ethan tries flicking it, but no spark for him. The soldier scoops up handfuls of gold, pumped about his big industry kickoff. The wolf sniffs around, muttering about weird smells, but the witch isn’t done—she screeches from the tunnel, saying they’ll pay for stealing ‘her’ stuff. Ethan’s not fazed yet, figuring she’s all talk, and they start hauling the loot out. The cave feels alive, walls humming, and Ethan’s gut says this isn’t over—something’s brewing with that witch, and it’s gonna get messy.',
      terminology: [
        {
          name: '[Tale Zone]',
          description:
            'Story-based spots in [Starfield], small and weird—like a Little Red Riding Hood place mixed with The Tinderbox, causing glitches.',
        },
        {
          name: '[Skill Box]',
          description:
            'Ethan’s sneaky gadget that grabs [Character Bits] from wins or kills to make [Boosts], tracks [Run] results too.',
        },
        {
          name: '[Character Bits]',
          description:
            'Stuff Ethan collects from victories or dead monsters to build [Boosts], ranked F to SSS.',
        },
        {
          name: '[Boosts]',
          description:
            'Power-ups from [Character Bits], like [Quick Step], [Tough Skin], [Sharp Eye], [Strong], and [Hunter] Ethan’s got.',
        },
        {
          name: '[Run]',
          description: 'A job in [Starfield]—finish it to grab loot, graded F to SSS.',
        },
      ],
      character: [
        {
          name: '[Ethan Carver]',
          description:
            'A [Rookie Fighter] almost at [Copper Bronze], has a [Skill Box] with five [Boosts]: [Quick Step], [Tough Skin], [Sharp Eye], [Strong], [Hunter]. Helps Little Red in a [Tale Zone], ties up the wolf, teaches her to hunt, hears the wolf’s offer, fights dogs in cave.',
        },
        {
          name: '[Wolf]',
          description:
            'A talking wolf from the Little Red Riding Hood [Tale Zone], can’t be hurt except by hunters, wants to be Ethan’s summon, swaps tech talk with soldier.',
        },
        {
          name: '[Little Red Riding Hood]',
          description:
            'A kid in the [Tale Zone], picks up hunting fast from Ethan, wants to find another hero, grabs a magic lighter in cave.',
        },
        {
          name: '[Soldier]',
          description:
            'A guy from The Tinderbox [Tale Zone], has a magic cloth from the witch, wants industry boom with cave loot, chats tech with wolf.',
        },
        {
          name: '[Witch]',
          description:
            'A lady in the cave, gave soldier a magic cloth, fights about loot, threatens them.',
        },
      ],
    },
    {
      chapterIndex: 12,
      title: 'Witch’s Revenge',
      summaryDetail:
        'They’re lugging the loot out when the cave rumbles—rocks crash down, and the witch jumps out, eyes blazing red, staff spitting dark sparks. She points at Little Red, yelling, ‘That lighter’s mine—hand it over!’ Little Red freezes, clutching it tight, stammering, ‘Maybe we should give it back…’ Ethan snaps, ‘No way, kid—it’s yours now.’ The soldier nods, gripping his sword, ‘She’s not getting squat.’ The witch snarls, blasting black fire at them—Ethan dodges with [Quick Step], shoving Little Red aside. She fires an arrow, but it fizzles against the witch’s shield. The soldier swings, gets blown back by wind. The wolf growls, then bolts for the exit—Ethan curses, ‘Not now!’ Panicked, Little Red fumbles the lighter and flicks it—a flame sparks, the world glitches for a second, everything stuttering. The wolf yelps as it’s sucked into the lighter, vanishing in a swirl of light. The flame leaps out, growing into a massive wolf—big as a person, fur glowing, muscles rippling, looking ready to wreck anything. Ethan stares, jaw dropped, as the cave shakes harder, the witch screaming in rage.',
      terminology: [
        {
          name: '[Tale Zone]',
          description:
            'Story-based spots in [Starfield], small and weird—like a Little Red Riding Hood place mixed with The Tinderbox, causing glitches.',
        },
        {
          name: '[Skill Box]',
          description:
            'Ethan’s sneaky gadget that grabs [Character Bits] from wins or kills to make [Boosts], tracks [Run] results too.',
        },
        {
          name: '[Character Bits]',
          description:
            'Stuff Ethan collects from victories or dead monsters to build [Boosts], ranked F to SSS.',
        },
        {
          name: '[Boosts]',
          description:
            'Power-ups from [Character Bits], like [Quick Step], [Tough Skin], [Sharp Eye], [Strong], and [Hunter] Ethan’s got.',
        },
        {
          name: '[Run]',
          description: 'A job in [Starfield]—finish it to grab loot, graded F to SSS.',
        },
      ],
      character: [
        {
          name: '[Ethan Carver]',
          description:
            'A [Rookie Fighter] almost at [Copper Bronze], has a [Skill Box] with five [Boosts]: [Quick Step], [Tough Skin], [Sharp Eye], [Strong], [Hunter]. Helps Little Red in a [Tale Zone], ties up the wolf, teaches her to hunt, hears the wolf’s offer, fights witch in cave.',
        },
        {
          name: '[Wolf]',
          description:
            'A talking wolf from the Little Red Riding Hood [Tale Zone], can’t be hurt except by hunters, wants to be Ethan’s summon, swaps tech talk with soldier, gets sucked into lighter.',
        },
        {
          name: '[Little Red Riding Hood]',
          description:
            'A kid in the [Tale Zone], picks up hunting fast from Ethan, wants to find another hero, grabs a magic lighter in cave, summons new wolf.',
        },
        {
          name: '[Soldier]',
          description:
            'A guy from The Tinderbox [Tale Zone], has a magic cloth from the witch, wants industry boom with cave loot, chats tech with wolf.',
        },
        {
          name: '[Witch]',
          description:
            'A lady in the cave, gave soldier a magic cloth, now fights them with dark magic over lighter.',
        },
      ],
    },
    // TODO: Update: Làm sao cho ending arc này phù hợp hơn 1 chút. Grandma sẽ không wave them off, và main có hỏi thăm ý kiến Little Red (Little Red có nhận giảng giải từ Wolf về chế độ Summon)
    {
      chapterIndex: 13,
      title: 'Out of the Cave',
      summaryDetail:
        'The new wolf roars, lunging at the witch—she swings her staff, but it smashes through her shield like paper, claws raking her arm. She howls, hurling fireballs—the wolf dodges, fast and fierce. Ethan grins, figuring it out—the lighter from The Tinderbox calls three dogs, but this one’s mixed with Little Red’s wolf, making a badass new summon. He yells, ‘Get her!’ and the wolf tackles her, pinning her down. Little Red, still shaky, grips the lighter tight, while the soldier slashes through vines sprouting from the walls. Ethan charges with [Strong], slamming the witch’s staff away, then ties her up with rope—she’s cursing, but beat. The cave calms, vines drooping, gold safe. Back at Grandma’s, [Skill Box] chimes: ‘[Run] Done: B Rank—story’s nuts.’ Ethan grumbles about the glitchy [Tale Zone], but he can take Little Red out, and the wolf’s hers now—big, mean, and loyal. The soldier’s stoked with his gold haul, ready to kick off his industry gig. Grandma waves them off, and Ethan’s pumped—a hunter kid and her monster wolf are his crew now.',
      terminology: [
        {
          name: '[Tale Zone]',
          description:
            'Story-based spots in [Starfield], small and weird—like a Little Red Riding Hood place mixed with The Tinderbox, causing glitches.',
        },
        {
          name: '[Skill Box]',
          description:
            'Ethan’s sneaky gadget that grabs [Character Bits] from wins or kills to make [Boosts], tracks [Run] results too.',
        },
        {
          name: '[Character Bits]',
          description:
            'Stuff Ethan collects from victories or dead monsters to build [Boosts], ranked F to SSS.',
        },
        {
          name: '[Boosts]',
          description:
            'Power-ups from [Character Bits], like [Quick Step], [Tough Skin], [Sharp Eye], [Strong], and [Hunter] Ethan’s got.',
        },
        {
          name: '[Run]',
          description: 'A job in [Starfield]—finish it to grab loot, graded F to SSS.',
        },
      ],
      character: [
        {
          name: '[Ethan Carver]',
          description:
            'A [Rookie Fighter] almost at [Copper Bronze], has a [Skill Box] with five [Boosts]: [Quick Step], [Tough Skin], [Sharp Eye], [Strong], [Hunter]. Helps Little Red in a [Tale Zone], ties up the wolf, teaches her to hunt, hears the wolf’s offer, beats witch, finishes [Run] with B rank, takes Little Red out.',
        },
        {
          name: '[Wolf]',
          description:
            'A talking wolf from the Little Red Riding Hood [Tale Zone], can’t be hurt except by hunters, wants to be Ethan’s summon, swaps tech talk with soldier, reborn as Little Red’s big summon wolf.',
        },
        {
          name: '[Little Red Riding Hood]',
          description:
            'A kid in the [Tale Zone], picks up hunting fast from Ethan, wants to find another hero, grabs a magic lighter, summons new wolf, goes with Ethan.',
        },
        {
          name: '[Soldier]',
          description:
            'A guy from The Tinderbox [Tale Zone], has a magic cloth from the witch, wants industry boom, gets cave gold.',
        },
        {
          name: '[Witch]',
          description:
            'A lady in the cave, gave soldier a magic cloth, fights with magic over lighter, gets tied up by Ethan.',
        },
        {
          name: '[Grandma]',
          description:
            'Little Red’s grandma, lives in a [Tale Zone] house, spooked at first but now helps with food.',
        },
      ],
    },
    {
      chapterIndex: 14,
      title: 'The Black Space',
      summaryDetail:
        'Ethan blinks and finds himself in a pitch-black void—the personal space of [Starfield]. A glowing status board pops up, listing what he can take from his [Run]. He scrolls through, spotting Little Red as a summon option—his jaw drops, shocked he can pick her, a living person, not just some beast. He digs into her stats: Level 1, no surprise, but she’s got a title, ‘Tales Main (Hero of Many Stories),’ boosting her leveling speed by 50%. Her skills catch his eye—[Wolf Summon: Copper-Silver-Gold], costing 20% mana for Copper, 40% for Silver, 80% for Gold. Each mode’s stronger—Gold’s stats rival a [Copper Bronze Fighter] at Level 1, and that’s just the start. Without the lighter, the wolf’s a passive shadow buddy, decent but [Rookie]-level. A note warns: feed it three pounds of meat daily, or it’ll turn on her after three days. Ethan’s own haul’s sweet too—[Payback] gives him 20% of Little Red’s EXP, and [Summoner Shield] tosses up a barrier. The board explains [Run] rewards: first ones are loaded, but they taper off later. He picks Little Red, hits confirm, and the void fades.',
      terminology: [
        {
          name: '[Starfield]',
          description:
            'A giant realm of mini-worlds and [Warp Gates], crashed into Earth 500 years ago, source of [Aether Pulse].',
        },
        {
          name: '[Skill Box]',
          description:
            'Ethan’s secret tool that collects [Character Bits] from kills or wins to make [Boosts].',
        },
        {
          name: '[Run]',
          description:
            'A task in [Starfield]—finish it for loot, graded F to SSS, first runs give big rewards.',
        },
        {
          name: '[Payback]',
          description: 'Skill letting Ethan gain 20% EXP from his summons’ kills.',
        },
        {
          name: '[Summoner Shield]',
          description: 'Skill creating a protective barrier around Ethan.',
        },
        {
          name: '[Tales Main]',
          description: 'Little Red’s title, boosts her leveling speed by 50%.',
        },
        {
          name: '[Wolf Summon: Copper-Silver-Gold]',
          description:
            'Little Red’s skill, summons a wolf in three modes, costing 20%/40%/80% mana, Gold mode matches [Copper Bronze] strength.',
        },
      ],
      character: [
        {
          name: '[Ethan Carver]',
          description:
            'A [Rookie Fighter] almost at [Copper Bronze], has a [Skill Box] with five [Boosts]: [Quick Step], [Tough Skin], [Sharp Eye], [Strong], [Hunter]. Gets [Payback] and [Summoner Shield], picks Little Red as summon.',
        },
        {
          name: '[Little Red Riding Hood]',
          description:
            'Level 1 summon with [Tales Main] title, 50% faster leveling, has [Wolf Summon: Copper-Silver-Gold], wolf lives in her shadow passively.',
        },
      ],
    },
    {
      chapterIndex: 15,
      title: 'Back to the Real World',
      summaryDetail:
        'Ethan steps out of a [Warp Gate] into the training yard, blinking as folks stare at him—eyes wide, full of awe. He’s confused till Ms. Voss, a stern [Black Iron] instructor, stomps over, eyeing Little Red beside him. She snorts, ‘Grade F summon—weak.’ Ethan shrugs, but then Little Red’s shadow ripples—the wolf slinks out, normal at first, [Rookie]-level scrappy. Ms. Voss smirks, unimpressed, till Little Red flicks her lighter. The wolf shifts—Copper mode, fur gleaming, muscles tight—Ms. Voss blinks, muttering, ‘Grade B now… maybe A.’ She launches into a lecture: summons tie to spiritual force—stronger spirit, bigger potential, more contracts. Young [Starfield Callers] like Ethan are prime picks; older folks can bond too, but mostly for backup summons. Ethan nods, half-listening, still buzzing from the stares. Little Red’s quiet, wolf back in her shadow, and Ms. Voss warns him to train her up—she’s raw but loaded with potential. Exhausted, Ethan heads home, crashes on his beat-up couch, and sleeps hard, dreaming of what’s next with his new crew.',
      terminology: [
        { name: '[Warp Gate]', description: 'Portals in [Starfield] linking worlds and Earth.' },
        {
          name: '[Starfield Caller]',
          description: 'Rare folks who bond with [Starfield] creatures via spiritual force.',
        },
        {
          name: '[Wolf Summon: Copper-Silver-Gold]',
          description:
            'Little Red’s skill, summons a wolf in three modes, Copper mode hits Grade B/A strength.',
        },
      ],
      character: [
        {
          name: '[Ethan Carver]',
          description:
            'A [Rookie Fighter] almost at [Copper Bronze], has a [Skill Box] with five [Boosts], now with [Payback] and [Summoner Shield], bonds Little Red.',
        },
        {
          name: '[Little Red Riding Hood]',
          description:
            'Level 1 summon with [Tales Main], summons wolf from shadow, Copper mode impresses Ms. Voss.',
        },
        {
          name: '[Ms. Voss]',
          description:
            'A [Black Iron] instructor, grades summons, explains spiritual force and contracts.',
        },
      ],
    },
    {
      chapterIndex: 16,
      title: 'Training Ground Showdown - Part 1',
      summaryDetail:
        'Ethan drags Little Red to a training center—a big barn in a sprawling farm, buzzing with newbies and their summons. He wants to test her and the wolf’s limits. The place is weird—dozens of mirrors line the walls, spitting out fake monsters for practice. A sign calls them [Harvest Mirror], a [Marvel Item]—rumored to boost crop yields, but the catch is monsters spawn in a kilometer radius. Here, they’ve rigged it so the beasts only pop from the glass, making a perfect sparring zone. Ethan grins, muttering, ‘Smart folks turned a flaw into a win—lame users, not lame gear.’ He sets Little Red up against a mirror beast—a hulking boar-thing. She summons the wolf in Copper mode—20% mana, fur shining, claws sharp. It tears into the boar, dodging tusk swipes, ripping it apart fast. Ethan whoops as Little Red gets 10 EXP, and he feels 2 EXP trickle in—[Payback] kicking in. The crowd gawks, impressed, but Ethan’s not done—he tells her to push harder next round, itching to see Silver mode in action.',
      terminology: [
        {
          name: '[Marvel Item]',
          description:
            'Mystical gear with bent rules, unlike skill weapons—[Oddity] tier has weird effects and drawbacks.',
        },
        {
          name: '[Harvest Mirror]',
          description:
            'An [Oddity] boosting crop yields, spawns monsters in a kilometer radius, rigged here for training.',
        },
        { name: '[Payback]', description: 'Skill giving Ethan 20% EXP from Little Red’s kills.' },
        {
          name: '[Wolf Summon: Copper-Silver-Gold]',
          description: 'Little Red’s skill, Copper mode costs 20% mana, fast and strong.',
        },
      ],
      character: [
        {
          name: '[Ethan Carver]',
          description:
            'A [Rookie Fighter] almost at [Copper Bronze], tests Little Red at training center, sees [Payback] work.',
        },
        {
          name: '[Little Red Riding Hood]',
          description:
            'Level 1 summon with [Tales Main], summons Copper wolf, fights mirror beast, earns 10 EXP.',
        },
      ],
    },
    {
      chapterIndex: 17,
      title: 'Training Ground Showdown - Part 2',
      summaryDetail:
        'Round two at the training center—Ethan’s hyped, telling Little Red to crank it up. She flicks the lighter, burning 40% mana for Silver mode—the wolf grows, fur shimmering like liquid metal, eyes fierce. A new mirror beast lumbers out—a scaly bear with claws like knives. The wolf’s got three common skills—bite, dodge, claw—plus a Silver-only trick, [Lunar Howl], boosting its speed. It zips around, howling, then tears into the bear, shredding scales like paper. The bear’s tough, landing a swipe, but the wolf’s too quick, finishing it off with a savage bite. Little Red snags 10 EXP again, Ethan gets 2—[Payback] still ticking. He pushes her for Gold mode, 80% mana—she hesitates but nods. The wolf swells, gold fur blazing, radiating power—[Golden Roar] shakes the barn, stunning a rhino-beast from the mirror. It charges through, crushing the rhino in seconds, stats rivaling [Copper Bronze]. Ethan’s stoked—Level 1 and already this strong? Little Red’s panting, mana drained, but grinning. The trainers mutter—this kid’s a freak.',
      terminology: [
        {
          name: '[Harvest Mirror]',
          description: 'An [Oddity] spawning training monsters from glass, rigged for practice.',
        },
        {
          name: '[Wolf Summon: Copper-Silver-Gold]',
          description:
            'Silver mode (40% mana) has [Lunar Howl], Gold mode (80% mana) has [Golden Roar], massive power boost.',
        },
        { name: '[Payback]', description: 'Ethan’s skill, 20% EXP from Little Red’s kills.' },
      ],
      character: [
        {
          name: '[Ethan Carver]',
          description:
            'A [Rookie Fighter] almost at [Copper Bronze], watches Little Red’s wolf dominate in Silver and Gold modes.',
        },
        {
          name: '[Little Red Riding Hood]',
          description:
            'Level 1 summon with [Tales Main], summons Silver and Gold wolf, wipes out mirror beasts, earns 10 EXP per kill.',
        },
      ],
    },
    {
      chapterIndex: 18,
      title: 'Planning the Path',
      summaryDetail:
        'Ethan flops on his couch at home, Little Red curled up nearby, wolf in her shadow. He’s mulling his next move, brain buzzing with options. Option one: hunting. A forest nearby’s crawling with monsters—tons from [Marvel Items] gone wild. School trips hit it sometimes, good EXP spots. Option two: selling stuff. As an orphan, he’s got decent cash, but his [Skill Box] can break down items for [Character Bits]—better gear, better bits, quality tied to name length. He’s scheming—buy high-quality junk with long names, low use, grind them for bits. Problem is, without [Starfield Caller] status, he couldn’t shop much before; even [Black Iron] opens doors, and now he’s legit, he’ll wait for the badge and hit the market. Little Red’s wolf needs three pounds of meat daily—nine bucks a day adds up, but her potential’s nuts with that 50% level boost and Gold mode’s punch. Ethan scribbles notes—hunt for EXP, sell for bits, train her up. He’s a [Rookie], but with her, he’s dreaming big.',
      terminology: [
        {
          name: '[Skill Box]',
          description:
            'Ethan’s gadget, breaks items or kills for [Character Bits], quality tied to item name length.',
        },
        {
          name: '[Character Bits]',
          description: 'Bits from kills or item breakdown, used for [Boosts], quality varies.',
        },
        {
          name: '[Marvel Item]',
          description: 'Mystical gear spawning monsters when misused, like in the forest.',
        },
        { name: '[Tales Main]', description: 'Little Red’s title, 50% faster leveling.' },
      ],
      character: [
        {
          name: '[Ethan Carver]',
          description:
            'A [Rookie Fighter] almost at [Copper Bronze], plans hunting and trading, banks on Little Red’s growth.',
        },
        {
          name: '[Little Red Riding Hood]',
          description:
            'Level 1 summon with [Tales Main], wolf needs 3 pounds of meat daily, huge potential.',
        },
      ],
    },
    {
      chapterIndex: 19,
      title: 'Starfield Caller 101 - Theory',
      summaryDetail:
        'Ethan strolls into class, buzzing—Ms. Voss announces two new courses for [Starfield Callers]: theory and practice. His classmates gape, whispering about his [Run]. He’s stoked, heading to a packed lecture hall. Summons are everywhere—wolves, vines, a floating book, even a sword—Ethan’s eyes pop. Little Red fidgets, feeling small, but her wolf snorts from her shadow, growling it could take most with Silver mode, tougher ones with Gold. Ethan scopes the room—some kids look cocky, others curious, all eyeing his wolf with no fear, just intrigue. A new professor, grizzled [White Silver], strides in, kicking off [Starfield Caller 101]: basics—[Payback] shares EXP, defense skills like [Summoner Shield] or [Bonding] shift damage to summons. Strength? Controlling badass summons. Weakness? Callers are squishy—standalone class, no skill cards or [Run] rewards for other classes, only practice-honed skills, less efficient than card-learned ones. He demos—100 mana card skill hits hard, 200 mana practiced skill flops. Ethan nods—observation and timing are key. Class ends, his head spinning with summons and tactics.',
      terminology: [
        {
          name: '[Starfield Caller]',
          description:
            'Class bonding with summons, standalone, learns skills only via practice, not cards or [Run].',
        },
        { name: '[Payback]', description: 'Shares 20% EXP from summons to Caller.' },
        { name: '[Summoner Shield]', description: 'Defensive skill, creates a barrier.' },
        { name: '[Bonding]', description: 'Defensive skill, shifts damage to summons.' },
        {
          name: '[Wolf Summon: Copper-Silver-Gold]',
          description: 'Little Red’s skill, Silver and Gold modes boasted by wolf.',
        },
      ],
      character: [
        {
          name: '[Ethan Carver]',
          description:
            'A [Rookie Fighter] almost at [Copper Bronze], excited for [Starfield Caller] class, sizes up peers.',
        },
        {
          name: '[Little Red Riding Hood]',
          description:
            'Level 1 summon with [Tales Main], feels shy, wolf brags about Silver/Gold modes.',
        },
        { name: '[Ms. Voss]', description: 'A [Black Iron] instructor, announces new courses.' },
        {
          name: '[Professor]',
          description: 'A [White Silver] teacher, lectures on [Starfield Caller 101].',
        },
      ],
    },
    {
      chapterIndex: 20,
      title: 'Starfield Caller 101 - Practice',
      summaryDetail:
        'Practice class kicks off—military school kids roll in, all [Warriors], smirking at the [Starfield Callers]. Two matches go down fast: a bear summon gets flipped by a [Warrior]’s kick, Caller tackled and tapped out; then a vine summon’s uprooted, Caller pinned. Ethan’s turn—he steps up, Little Red flicking her lighter to Copper mode. The [Warrior], a beefy [Rookie], charges, aiming to punt the wolf. Ethan throws up [Summoner Shield]—it takes a hit, buying time. The wolf dodges, nipping the guy’s legs, and Ethan barks orders—sharp, precise. The [Warrior] swings, but Ethan sidesteps with [Quick Step], wolf lunging to trip him. Flat on his back, the guy yields—crowd cheers, classmates stunned. The professor nods, ‘Observation and timing—good.’ Ethan grins—[Warriors] hit hard, flip summons easy, but he’s got control and a scrappy wolf. Little Red beams, wolf back in her shadow, and Ethan feels it—he’s not just a [Rookie] anymore, he’s a [Starfield Caller] with bite.',
      terminology: [
        {
          name: '[Starfield Caller]',
          description: 'Class relying on summons, weak alone, needs sharp tactics.',
        },
        {
          name: '[Warrior]',
          description:
            'Class using martial arts, excels at disrupting summons and hitting Callers.',
        },
        { name: '[Summoner Shield]', description: 'Ethan’s barrier skill, blocks a hit.' },
        {
          name: '[Wolf Summon: Copper-Silver-Gold]',
          description: 'Copper mode (20% mana), quick and scrappy in fight.',
        },
        { name: '[Quick Step]', description: 'Ethan’s boost, dodges [Warrior]’s swing.' },
      ],
      character: [
        {
          name: '[Ethan Carver]',
          description:
            'A [Rookie Fighter] almost at [Copper Bronze], wins practice match as [Starfield Caller].',
        },
        {
          name: '[Little Red Riding Hood]',
          description: 'Level 1 summon with [Tales Main], Copper wolf helps Ethan win.',
        },
        {
          name: '[Warrior]',
          description: 'A [Rookie] military student, loses to Ethan’s tactics.',
        },
        {
          name: '[Professor]',
          description: 'A [White Silver] teacher, oversees practice, praises Ethan.',
        },
      ],
    },
  ],
}

const everyOneHasAPlanet = {
  id: '1',
  name: 'The Age of Awakening',
  additionalNotes: `
    ## Write the story a proffesional sci-fi fantasy write, with clear and easy-to-understand, easy-to-read tone
  `,
  worldBuilding:
    'The tale unfolds in a realm shaped by the New Pantheon (*Neo-Deus Collective*), a faction born from the ashes of the Chaos Vortex (*Vortex Chaotica*), a catastrophic event that fractured reality millions of years ago. Emerging from this turmoil, the New Pantheon evolved into a dominant force, its members striving to ascend from Planetary Lords to World Sovereigns by forging self-sustaining worlds—a rare feat with a low success rate. At 18, humans undergo the Celestial Awakening Ritual, channeling Primordial Essence to awaken personal planets. Success elevates them to Planetary Lords within the New Pantheon, granting autonomy and power; failure binds them to servitude under others. James Carter, a transmigrator who arrived six months ago, navigates this world with the Supreme Evolution System, a tool he awakened prior to the ritual. Rejecting conventional supernatural paths, he blends science and low-tier Vital Force to craft Terra Nova, a planet that defies expectations. His journey draws attention from Rivergate Seventh Academy and external factions like the Stellar Consortiums, heralding a path fraught with promise and peril.',
  link: `
    Original: https://grok.com/chat/d18724b6-ea4f-42d1-9061-18fc7f9c20fa
    New: https://grok.com/chat/f2d5a5bb-8f56-4468-9f3f-5ab01e3d8c79
    `,
  setting: {
    characters_and_terms: [
      {
        name_before: 'Giang Phàm',
        description_before:
          'Một Tinh Cầu Chủ cấp một, sở hữu Lam Tinh, sử dụng Hệ Thống Tiến Hóa Tối Thượng để phát triển khoa học kỹ thuật, dẫn dắt Vũ quốc chinh phạt tinh cầu vô chủ, giao tiếp với Khải qua Thủy Khí.',
        name_after: 'James Carter',
        description_after:
          'A Planetary Lord of Terra Nova (now 132 km, 700+ species), wielding the Supreme Evolution System; guides Saurithar and Aquafluis, raids martial husks for Essence Shards, trades with the Stellar Consortium, poses Six Enigmas to awaken Zethar’s mind, selects Tharok as heir, and positions Terra Nova as a hybrid power in the New Pantheon.',
      },
      {
        name_before: 'Khải',
        description_before:
          'Lãnh đạo Vũ quốc trên Lam Tinh, thông minh, sáng tạo (phát minh giấy, in ấn, kim chỉ nam, dầu hỏa), dẫn Đại Hoang quân đánh bại Võ Giả tinh cầu, được Giang Phàm hướng dẫn qua sáu câu hỏi về khoa học.',
        name_after: 'Zethar',
        description_after:
          'Ruler of the Saurith Dominion, son of Kress; matures into a visionary leader by 30, masters Storage Runes, leads expeditions through portal rifts, battles Aquafluis with fire-staves, splits scholars into Rune Academy and Forge Guild, and seeks James’ guidance for succession as age weakens him.',
      },
      {
        name_before: 'Hoang',
        description_before:
          'Cha của Khải, người thống nhất Hoang bộ lạc, vượt qua Man bộ lạc bằng trí tuệ, để lại di sản cho Vũ quốc.',
        name_after: 'Kress',
        description_after:
          'Historical figure, First Lord of the Saurith Dominion; unified tribes with James’ oracles, died naming Zethar heir; his legacy inspires Zethar’s rule and the Dominion’s fight against Aquafluis, remembered as ‘Kress the Unifier’ in Valthruk’s annals.',
      },
      {
        name_before: 'Hàn',
        description_before:
          'Con thứ bảy của Khải, yếu đuối nhưng có thiên phú y học, phát minh cồn, thuốc mê, và pênixilin, trở thành viện trưởng Y Dược Học Viện.',
        name_after: 'Tharok',
        description_after:
          'Zethar’s seventh son, a frail Saurithar Scribe chosen by James; invents heat-runes at ten and resonance-runes later, becomes Dominion ruler at fifteen, founds the Flame Academy',
      },
      {
        name_before: 'Vũ quốc',
        description_before:
          'Quốc gia trên Lam Tinh, do Khải lãnh đạo, phát triển từ bộ lạc thành xã hội phong kiến, sở hữu Đại Hoang quân chinh phạt ngoại tinh.',
        name_after: 'Saurithar',
        description_after:
          'Terra Nova’s dominant species; Berserkers wield sonic mauls, Scribes craft fire-staves, and Hybrids bridge both, united under the Dominion; evolve rune-tech to fight Aquafluis, unaware of their full threat, guided by James’ divine will.',
      },
      {
        name_before: 'Không có',
        description_before: 'Không có dữ liệu trước đó tương ứng từ *Mỗi Người Một Cái Tinh Cầu*.',
        name_after: 'Aquafluis gelatinosa',
        description_after:
          'Gelatinous, Vital Force-infused beings from a drowned Realm; acidic, shapeshifting, and self-replicating, spanning half a continent; unnoticed by Saurithar but tracked by James, posing a relentless threat to Terra Nova’s outposts.',
      },
      {
        name_before: 'Lam Tinh',
        description_before:
          'Tinh cầu của Giang Phàm, đường kính 250.4 km, 1212 loài, phát triển khoa học kỹ thuật dưới sự dẫn dắt của Vũ quốc.',
        name_after: 'Terra Nova',
        description_after:
          'James’ burgeoning world, now 132 km with 700+ species; blends science and Vital Force, supports the Saurith Dominion, extends via rifts, and faces Aquafluis, a rising star in the New Pantheon under James’ divine stewardship.',
      },
      {
        name_before: 'Hệ Thống Tiến Hóa Tối Thượng',
        description_before:
          'Công cụ của Giang Phàm để thức tỉnh và tiến hóa Lam Tinh, hỗ trợ phát triển khoa học và chinh phạt.',
        name_after: 'Supreme Evolution System',
        description_after:
          'James’ divine interface; accelerates Terra Nova’s time, simulates heirs like Tharok,  fueling the planet’s ascent in the New Pantheon.',
      },
      {
        name_before: 'Tinh Cầu Hiệp Hội',
        description_before:
          'Tổ chức quản lý Tinh Cầu Chủ, nơi Giang Phàm đổi tài nguyên và nhận thông tin về tinh cầu vô chủ.',
        name_after: 'Planetary Guild',
        description_after:
          'A New Pantheon hub in Rivergate City where Planetary Lords trade or claim Essence Shards.',
      },
      {
        name_before: 'Không có',
        description_before: 'Không có dữ liệu trước đó tương ứng từ *Mỗi Người Một Cái Tinh Cầu*.',
        name_after: 'Storage Rune',
        description_after:
          'Tharok’s creation, now mass-produced; powers spears, tools, and portal glyphs, democratizing Vital Force across Saurithar, key to fighting Aquafluis and cosmic expansion.',
      },
      {
        name_before: 'Không có',
        description_before: 'Không có dữ liệu trước đó tương ứng từ *Mỗi Người Một Cái Tinh Cầu*.',
        name_after: 'New Pantheon',
        description_after:
          'A dominant faction (*Neo-Deus Collective*) formed millions of years after the Chaos Vortex, aiming to cultivate Planetary Lords into World Sovereigns.',
      },
      {
        name_before: 'Năng lượng bản nguyên',
        name_after: 'Primordial Essence',
        description_after:
          'A fundamental energy source used to awaken and evolve planets, drawn from Primordial Orbs.',
      },
      {
        name: 'Vital Force',
        description:
          'A low-tier supernatural energy, the weakest of the New Pantheon’s four energy tiers, used for basic civilizations.',
      },
    ],
  },
  chapters: [
    {
      chapterIndex: 1,
      title: 'The Ritual Begins',
      summaryDetail:
        'Chapter 1 opens at Rivergate Seventh Academy, a bustling hub within the New Pantheon’s domain, where the Celestial Awakening Ritual marks a turning point for 18-year-olds. New Pantheon explanation (*Neo-Deus Collective*), a faction born from the ashes of the Chaos Vortex (*Vortex Chaotica*), a catastrophic event that fractured reality millions of years ago. Emerging from this turmoil, the New Pantheon evolved into a dominant force, its members striving to ascend from Planetary Lords to World Sovereigns by forging self-sustaining worlds—a rare feat with a low success rate. At 18, humans undergo the Celestial Awakening Ritual, channeling Primordial Essence to awaken personal planets. Success elevates them to Planetary Lords within the New Pantheon, granting autonomy and power; failure binds them to servitude under others. Whispers ripple through the crowd: a prodigy from Prime Academy has awakened a planet 38 kilometers in diameter, shattering records and fueling dreams of grandeur. Students at Rivergate fantasize about planets harnessing Aetheric Flux, a high-tier energy promising immortal civilizations, or at least Vital Force for martial societies. The air outside the awakening chamber hums with anticipation, fear, and hope as peers exchange tales of past successes and failures. James Carter, a transmigrator who has acclimated to this world over six months, stands apart, his calm demeanor belying his stakes. He knows the rules: awaken a Living Planet to claim Planetary Lord status, or toil as a commoner for others. The first group exits the chamber—some beaming, others sobbing—heightening the tension. James, in the second wave, steps forward with resolve. Before him glows a Primordial Orb, its surface swirling with Primordial Essence, the key to his future. The instructor, a stern figure, outlines the process: touch the orb, channel the essence, and shape a planet in the awakening space. Failure looms if life doesn’t emerge before the essence runs dry. As James places his hand on the orb, a chaotic void unfurls in his mind, signaling the start of a transformative journey.',
      fullChapter: 'xvb',
      terminology: [
        {
          name: 'Primordial Essence',
          description:
            'A fundamental energy source used to awaken and evolve planets, drawn from Primordial Orbs.',
        },
        {
          name: 'Celestial Awakening Ritual',
          description:
            'A rite of passage at 18 where individuals awaken personal planets, determining their societal role within the New Pantheon.',
        },
        {
          name: 'Living Planet',
          description:
            'A planet that sustains life, the prerequisite for becoming a Planetary Lord.',
        },
        {
          name: 'Aetheric Flux',
          description:
            'A high-tier supernatural energy coveted for creating advanced civilizations.',
        },
        {
          name: 'New Pantheon',
          description:
            'A dominant faction (*Neo-Deus Collective*) formed millions of years after the Chaos Vortex, aiming to cultivate Planetary Lords into World Sovereigns.',
        },
        {
          name: 'Chaos Vortex',
          description:
            'A cataclysmic event (*Vortex Chaotica*) that shattered the world millions of years ago, leading to the rise of the New Pantheon.',
        },
      ],
      character: [
        {
          name: 'James Carter',
          description:
            'A transmigrator who has adapted to this world for over six months; begins the Celestial Awakening Ritual with cautious optimism. Member of the New Pantheon.',
          status: 'alive',
        },
        {
          name: 'Instructor Rowan',
          description:
            'A stern faculty member of Rivergate Seventh Academy overseeing the ritual, explaining its mechanics with precision. Member of the New Pantheon.',
          status: 'alive',
        },
      ],
    },
    {
      chapterIndex: 2,
      title: 'A Humble Beginning',
      summaryDetail:
        'Chapter 2 plunges into James Carter’s awakening within Rivergate’s dimly lit chamber, where the hum of Primordial Orbs fills the air. The ritual is deceptively simple, a matter of minutes, yet it hinges on raw talent—a test James fears he might fail. As he presses his palm against the orb, Primordial Essence courses through him, conjuring a faint yellowish dust cloud in his awakening space. Measuring a mere 0.85 kilometers, it’s less a planet than a drifting heap of dirt, incapable of harnessing even the weakest supernatural energy, Vital Force. Disappointment gnaws at him; a Living Planet requires awakening, energy conversion, and life creation—steps his tiny creation seems doomed to miss. Outside, monitors flicker with peers’ results: 9 km, 15 km, a prodigious 30 km, earning gasps of awe. James’ 0.85 km elicits pitying sighs from Instructor Rowan, who marks him as a likely failure. The stakes are personal—failure means a life of servitude, squandering the modest $50,000 inheritance his late parents left him. Just as despair creeps in, a chime resonates in his mind: the Supreme Evolution System, awakened months prior, fully activates. Its interface promises paths beyond his natural limits, rekindling his resolve to defy the odds and honor his family’s legacy in this unforgiving world of the New Pantheon.',
      terminology: [
        {
          name: 'Primordial Essence',
          description:
            'A fundamental energy source used to awaken and evolve planets, drawn from Primordial Orbs.',
        },
        {
          name: 'Supreme Evolution System',
          description:
            'A unique system James awakened before the ritual, requiring Primordial Essence after three free uses; it provides evolutionary paths for his planet.',
        },
        {
          name: 'Vital Force',
          description:
            'A low-tier supernatural energy, the weakest of the New Pantheon’s four energy tiers, used for basic civilizations.',
        },
      ],
      character: [
        {
          name: 'James Carter',
          description:
            'A transmigrator who has adapted to this world for over six months; awakens a 0.85 km dust cloud planet and activates the Supreme Evolution System, a tool he’d awakened earlier, giving him hope to transcend his limits. Member of the New Pantheon.',
          status: 'alive',
        },
        {
          name: 'Instructor Rowan',
          description:
            'A stern faculty member of Rivergate Seventh Academy overseeing the ritual, expressing doubt over James’ 0.85 km result. Member of the New Pantheon.',
          status: 'alive',
        },
      ],
    },
    {
      chapterIndex: 3,
      title: 'The Path Chosen',
      summaryDetail:
        'Chapter 3 unveils the Supreme Evolution System’s potential as James confronts his planet’s bleak stats: unnamed, 0.85 km, lifeless. A holographic panel materializes in his mind, listing three evolutionary paths: supernatural energy (0.01% success), common energy (0.1%), or solar radiance for natural life (99%). His dust cloud renders the first two nigh impossible, but the third sparks memories of Earth’s slow, resilient genesis—billions of years yielding life from nothing. The New Pantheon favors swift, forced life via supernatural energies like Aetheric Flux, yet James sees fragility in such methods, craving a sustainable alternative. His parents’ $50,000 inheritance, a bittersweet gift from them before going missing, fuels his plan: he’ll buy a Primordial Core to infuse low-tier Vital Force later, blending science with the supernatural. Rejecting the norm, he selects the solar path, envisioning a world thriving on natural laws bolstered by subtle power. He commands the system—still within its three free uses—to calculate prerequisites: gravity to bind the dust, stone to form a crust, landmasses for structure. The interface hums, projecting a blueprint for Terra Nova, a name whispered in his thoughts. Around him, peers revel in their larger planets, oblivious to the quiet revolution brewing within James—a fusion of Earth’s legacy and the New Pantheon’s ambitions, poised to redefine what a Planetary Lord can be.',
      terminology: [
        {
          name: 'Supreme Evolution System',
          description:
            'A unique system James awakened before the ritual, requiring Primordial Essence after three free uses; it provides evolutionary paths, now offering James three development options.',
        },
        {
          name: 'Primordial Core',
          description:
            'A concentrated form of Primordial Essence, costing $50,000, capable of upgrading a planet’s energy tier.',
        },
        {
          name: 'Vital Force',
          description:
            'A low-tier supernatural energy, the weakest of the New Pantheon’s four energy tiers, planned for infusion into James’ planet.',
        },
      ],
      character: [
        {
          name: 'James Carter',
          description:
            'A transmigrator who has adapted to this world for over six months; awakens a 0.85 km dust cloud planet, activates the Supreme Evolution System, and chooses a scientific path with plans to use his $50,000 inheritance from his late parents for a Primordial Core. Member of the New Pantheon.',
          status: 'alive',
        },
      ],
    },
    {
      chapterIndex: 4,
      title: 'Forging Terra Nova',
      summaryDetail:
        'Chapter 4 chronicles James’ transformation of his dust cloud into a nascent planet, a meticulous process guided by the Supreme Evolution System. The 0.85 km heap floats chaotically in the awakening space, a formless challenge. Channeling Primordial Essence, he wills the dust to coalesce—grains fusing into pebbles, pebbles into stones, stones into a rugged crust. Landmasses emerge, jagged and uneven, until he crafts gravity, pulling the mass into a compact sphere. Half his essence conjures a solar construct, its rays bathing the surface in warmth, mimicking a star’s nurturing glow. Mid-process, James recalls his inheritance—$50,000 from his parents, saved for this moment. He’d acquired a Primordial Core prior to the ritual, and now integrates it, its energy seeping into the planet, infusing it with Vital Force. The system accelerates time—100 million years compressed into minutes—simulating eons of natural progression. Heat pools form, and within one, thermoacidophiles bloom, microscopic pioneers of life. Unlike peers forcing life with raw power, James’ method is deliberate, blending science with subtle supernatural aid. The chamber’s monitors flicker, oblivious to his quiet triumph. Terra Nova takes shape, a testament to patience and ingenuity, defying the New Pantheon’s haste. As essence dwindles, James marvels at his creation—a small but living world, poised for greatness.',
      terminology: [
        {
          name: 'Primordial Core',
          description:
            'A concentrated form of Primordial Essence, costing $50,000, used by James to upgrade his planet to low-tier supernatural status with Vital Force.',
        },
        {
          name: 'Vital Force',
          description:
            'A low-tier supernatural energy, the weakest of the New Pantheon’s four energy tiers, now infused into James’ planet via a Primordial Core.',
        },
      ],
      character: [
        {
          name: 'James Carter',
          description:
            'A transmigrator who has adapted to this world for over six months; awakens a 0.85 km dust cloud planet, activates the Supreme Evolution System, chooses a scientific path, and uses a Primordial Core (bought with his $50,000 inheritance) to create Terra Nova with Vital Force and initial life (thermoacidophiles). Member of the New Pantheon.',
          status: 'alive',
        },
      ],
    },
    {
      chapterIndex: 5,
      title: 'A Living World',
      summaryDetail:
        'Chapter 5 heralds Terra Nova’s ascent to Living Planet status, a milestone that cements James’ place among Planetary Lords. In a scalding pool, thermoacidophiles thrive, their numbers swelling under the solar construct’s light. The Supreme Evolution System, its third free use nearing its end, accelerates time again—300 million years in an hour—ushering in cyanobacteria, their photosynthesis flooding the air with oxygen. Primitive sponges and jelly-like organisms follow, diversifying life to 220 species. The planet swells to 42.7 km, its growth fueled by vital energy, outstripping many peers’ supernatural worlds in ecological richness despite relying on Vital Force. James names it Terra Nova, its blue-green hue a nod to Earth’s oceans, a quiet tribute to his origins. Essence depleted, he halts acceleration, reflecting on his strategy: quantity over quality, science bolstered by subtle power. Around him, the chamber buzzes with peers’ chatter—some boast of their 30 km planets, others lament failures—but James’ triumph is understated, a foundation for a hybrid civilization. Instructor Rowan, reviewing results, raises an eyebrow at the anomaly. Terra Nova’s potential whispers of a new paradigm within the New Pantheon, one where patience and ingenuity might outshine raw might. James exits the chamber, a Planetary Lord at last, his mind alight with visions of Terra Nova’s future.',
      terminology: [
        {
          name: 'Living Planet',
          description:
            'A planet that sustains life, the prerequisite for becoming a Planetary Lord; Terra Nova achieves this with 220 species.',
        },
      ],
      character: [
        {
          name: 'James Carter',
          description:
            'A transmigrator who has adapted to this world for over six months; awakens a 0.85 km dust cloud planet, activates the Supreme Evolution System, chooses a scientific path, uses a Primordial Core to create Terra Nova (42.7 km, 220 species) with Vital Force, and becomes a Planetary Lord. Member of the New Pantheon.',
          status: 'alive',
        },
        {
          name: 'Instructor Rowan',
          description:
            'A stern faculty member of Rivergate Seventh Academy overseeing the ritual, noting James’ unexpected success with curiosity. Member of the New Pantheon.',
          status: 'alive',
        },
      ],
    },
    {
      chapterIndex: 6,
      title: 'Echoes of Triumph',
      summaryDetail:
        'Chapter 6 unfolds as the Celestial Awakening Ritual concludes, Primordial Essence exhausted, and students spill from Rivergate’s chamber into the courtyard. Emotions clash—elation from successes, despair from failures, and bewilderment from the unpredictable. Over half succeed, but many planets fall short, too small for meaningful energy conversion. The New Pantheon ranks energies in four tiers: Vital Force (low), Prime Essence (mid), Arcane Surge (high), and Aetheric Flux (super), with Vital Force dominating among novices. Monitors tally results: Student 1 at 11 km, Student 2 at 12.6 km, a standout at 23 km. Sophia Vale (29.8 km) and Marcus Holt (30 km) shine as prodigies, boosting Rivergate’s prestige beyond last year’s modest showing, though trailing Prime Academy. Principal Elias Thorn beams, anticipating a surge in enrollment. Then James’ result—42.7 km—flashes across the screens, stunning the room. A nobody from a modest background, now a record-breaker surpassing Prime’s 38 km, he’s dubbed an anomaly by awestruck instructors. Whispers of ‘monster talent’ ripple through the faculty, who marvel at Rivergate birthing such a figure. Thorn orders an immediate announcement, eager to leverage this feat. James stands quietly amidst the chaos, his success a stark contrast to his earlier obscurity, marking him as a rising star in the New Pantheon’s hierarchy.',
      terminology: [
        {
          name: 'Prime Essence',
          description:
            'A mid-tier supernatural energy in the New Pantheon’s hierarchy, stronger than Vital Force but below Arcane Surge.',
        },
        {
          name: 'Arcane Surge',
          description:
            'A high-tier supernatural energy, third in the New Pantheon’s four-tier system, used for advanced civilizations.',
        },
      ],
      character: [
        {
          name: 'James Carter',
          description:
            'A transmigrator who has adapted to this world for over six months; awakens a 0.85 km dust cloud planet, activates the Supreme Evolution System, chooses a scientific path, uses a Primordial Core to create Terra Nova (42.7 km, 220 species) with Vital Force, becomes a Planetary Lord, and is recognized as a record-breaking talent. Member of the New Pantheon.',
          status: 'alive',
        },
        {
          name: 'Sophia Vale',
          description:
            'A prodigy at Rivergate Seventh Academy with a 29.8 km planet, hailed as a top talent. Member of the New Pantheon.',
          status: 'alive',
        },
        {
          name: 'Marcus Holt',
          description:
            'A standout student with a 30 km planet, celebrated alongside Sophia as a peak achiever. Member of the New Pantheon.',
          status: 'alive',
        },
        {
          name: 'Principal Elias Thorn',
          description:
            'The authoritative head of Rivergate Seventh Academy, delighted by the school’s rising stars and James’ record. Member of the New Pantheon.',
          status: 'alive',
        },
      ],
    },
    {
      chapterIndex: 7,
      title: 'The Spotlight Shifts',
      summaryDetail:
        'Chapter 7 captures the electric aftermath as students gather outside the chamber, results reverberating through Rivergate’s courtyard. Marcus Holt, with his 30 km planet, basks in adulation, dubbed ‘Holt the Mighty’ by an enthusiastic crowd. Sophia Vale, the academy’s poised beauty, commands equal attention with her 29.8 km world, her modest smile masking quiet pride. Deputy Headmaster Lila Crane steps forward, her voice cutting through the din to announce Rivergate’s triumph: over half succeeded, with 210 planets above 10 km, 23 above 20 km, and two above 25 km—Sophia and Marcus. Cheers erupt, affirming the academy’s rising status. Then, Crane drops the bombshell: James Carter, number 81, achieved 42.7 km, eclipsing Prime Academy’s record. The crowd falls silent, then erupts anew, eyes swiveling to James—once overlooked, now a marvel. Disbelief mingles with awe; his feat feels too vast for envy, only wonder. Sophia’s composure falters briefly, musing that size is merely a start, yet she’s unsettled by this dark horse. Marcus’ grin fades, his spotlight stolen. Crane summons James aside, her tone clipped yet intrigued, leading him toward Principal Thorn’s office. Whispers trail him—‘monster,’ ‘genius’—as he walks, the weight of his new status settling in. Within the New Pantheon, James’ ascent signals a shift, his unassuming rise a prelude to greater scrutiny and expectation.',
      terminology: [],
      character: [
        {
          name: 'James Carter',
          description:
            'A transmigrator who has adapted to this world for over six months; awakens a 0.85 km dust cloud planet, activates the Supreme Evolution System, chooses a scientific path, uses a Primordial Core to create Terra Nova (42.7 km, 220 species) with Vital Force, becomes a Planetary Lord, and emerges as Rivergate’s top talent, breaking regional records. Member of the New Pantheon.',
          status: 'alive',
        },
        {
          name: 'Sophia Vale',
          description:
            'A prodigy at Rivergate Seventh Academy with a 29.8 km planet, hailed as a top talent, now overshadowed by James’ achievement. Member of the New Pantheon.',
          status: 'alive',
        },
        {
          name: 'Marcus Holt',
          description:
            'A standout student with a 30 km planet, celebrated as a peak achiever until James’ 42.7 km result dims his glory. Member of the New Pantheon.',
          status: 'alive',
        },
        {
          name: 'Deputy Headmaster Lila Crane',
          description:
            'A composed administrator at Rivergate, announcing results and escorting James to the principal, intrigued by his success. Member of the New Pantheon.',
          status: 'alive',
        },
      ],
    },
    {
      chapterIndex: 8,
      title: 'The Principal’s Reward',
      summaryDetail:
        'Chapter 8 shifts to Principal Elias Thorn’s office, a wood-paneled sanctum radiating authority within Rivergate Seventh Academy. Thorn, a Planetary Lord of the fourth tier, greets James with a blend of sternness and warmth, his presence a reminder of the New Pantheon’s upper echelons. He congratulates James on his 42.7 km Terra Nova, a record-breaking feat that elevates Rivergate’s name. The reward is substantial: $50,000 per standard protocol, doubled to $100,000 for the record—a fortune for James, an orphan sustained by meager federation aid. He reflects on his parents’ $50,000 legacy, already spent on the Primordial Core, and sees this windfall as a new lifeline. Knowing Terra Nova’s natural-supernatural hybrid needs essence over resources, he requests the prize as a Primordial Essence vial, surprising Thorn. Most novices chase rare minerals or life-seeds, but James’ pragmatism earns a nod of approval—‘a Lord’s foresight,’ Thorn muses. Curious, he probes James’ energy type, expecting Arcane Surge or Aetheric Flux for such a size. James deflects, hinting at a ‘unique’ choice, piquing Thorn’s interest. The principal hands over a glowing vial, its essence pulsing, and dismisses him with a cryptic smile. James leaves, clutching his prize, aware that this meeting marks his formal entry into the New Pantheon’s elite circles, where expectations—and pressures—will soon mount.',
      terminology: [],
      character: [
        {
          name: 'James Carter',
          description:
            'A transmigrator who has adapted to this world for over six months; awakens a 0.85 km dust cloud planet, activates the Supreme Evolution System, chooses a scientific path, uses a Primordial Core to create Terra Nova (42.7 km, 220 species) with Vital Force, becomes a Planetary Lord, breaks regional records, and receives a $100,000 reward as a Primordial Essence vial. Member of the New Pantheon.',
          status: 'alive',
        },
        {
          name: 'Principal Elias Thorn',
          description:
            'The authoritative head of Rivergate Seventh Academy, a fourth-tier Planetary Lord, awards James a Primordial Essence vial and grows curious about his energy choice. Member of the New Pantheon.',
          status: 'alive',
        },
      ],
    },
    {
      chapterIndex: 9,
      title: 'The Truth Revealed',
      summaryDetail:
        'Chapter 9 deepens the exchange in Thorn’s office as the principal presses James for details on Terra Nova’s energy. With a 42.7 km planet, Thorn anticipates a high-tier force—Arcane Surge, perhaps Aetheric Flux. James shakes his head, dismantling each guess, until Thorn reluctantly suggests Prime Essence, then Vital Force. When James admits to using Vital Force, augmented from solar radiance via a Primordial Core, Thorn nearly drops his teacup, shock etching his features. In the New Pantheon, Vital Force planets rarely exceed 15 km; 42.7 km defies logic. Stammering, Thorn grapples with the revelation—a ‘monster talent’ tethered to the weakest energy tier. He concedes James’ honesty, though disbelief lingers, and waves him off, mind reeling. James slips away, avoiding the throng of reporters and peers outside Rivergate. At his cramped aid-subsidized flat, he inspects the Primordial Essence vial, plotting Terra Nova’s next leap. His outdated comms device buzzes—messages from Stellar Consortiums, merchant guilds, and noble clans flood in, offering partnerships or shares in his planet. Without the Supreme Evolution System, he might’ve caved, but now he dismisses them, resolute in his independence. The New Pantheon’s elite may scoff at Vital Force, but James sees a future where science and subtle power outshine their dogma.',
      terminology: [
        {
          name: 'Stellar Consortiums',
          description:
            'Powerful external factions within the New Pantheon’s sphere, seeking to invest in promising Planetary Lords like James.',
        },
      ],
      character: [
        {
          name: 'James Carter',
          description:
            'A transmigrator who has adapted to this world for over six months; awakens a 0.85 km dust cloud planet, activates the Supreme Evolution System, chooses a scientific path, uses a Primordial Core to create Terra Nova (42.7 km, 220 species) with Vital Force, becomes a Planetary Lord, breaks regional records, receives a Primordial Essence vial, and rejects external offers to maintain control. Member of the New Pantheon.',
          status: 'alive',
        },
        {
          name: 'Principal Elias Thorn',
          description:
            'The authoritative head of Rivergate Seventh Academy, a fourth-tier Planetary Lord, awards James a Primordial Essence vial and is stunned to learn Terra Nova uses Vital Force. Member of the New Pantheon.',
          status: 'alive',
        },
      ],
    },
    {
      chapterIndex: 10,
      title: 'The Road Ahead',
      summaryDetail:
        'Chapter 10 finds James alone in his flat, the Primordial Essence vial glowing faintly on the table. Rivergate’s clamor fades into memory, replaced by a quiet determination to push Terra Nova further. The Supreme Evolution System, now requiring essence post its free uses, hums in his mind, ready to accelerate time once more. He reflects on the day—mocked for his 0.85 km start, now lauded for 42.7 km, yet underestimated for Vital Force. Sophia and Marcus, once the stars, now orbit his shadow, their planets potent but predictable. The Stellar Consortiums’ offers—lucrative, controlling—linger in his inbox, but James envisions a Terra Nova free of their grasp, a world where science amplifies subtle power into something transcendent. He recalls Earth’s tales—civilizations rising from nothing—and sees parallels in his path. The vial’s essence could fuel millions more years of evolution, birthing complex life or technologies beyond the New Pantheon’s ken. Outside, night cloaks the city, but James feels a dawn breaking within. Instructor Rowan’s skepticism, Thorn’s shock, the Consortiums’ greed—all fuel his resolve. Terra Nova isn’t just a planet; it’s a statement, a challenge to the Chaos Vortex’s legacy. As he activates the system, essence flowing, James steps into his role as a Planetary Lord, ready to carve a legacy in a universe that doubts him.',
      terminology: [],
      character: [
        {
          name: 'James Carter',
          description:
            'A transmigrator who has adapted to this world for over six months; awakens a 0.85 km dust cloud planet, activates the Supreme Evolution System, chooses a scientific path, uses a Primordial Core to create Terra Nova (42.7 km, 220 species) with Vital Force, becomes a Planetary Lord, breaks regional records, receives a Primordial Essence vial, rejects external offers, and begins planning Terra Nova’s next evolution. Member of the New Pantheon.',
          status: 'alive',
        },
      ],
    },
    {
      chapterIndex: 11,
      title: 'The Jura Ascension',
      summaryDetail:
        'Chapter 11 follows James Carter’s return from Rivergate with a Primordial Essence vial, accelerating Terra Nova’s evolution via the Supreme Evolution System. The planet shifts from the Cryovician to the Jura Era, its diameter climbing from 42.7 km to 58.3 km with 312 species. Reptiles, amphibians, and fern forests flourish under a warm climate, tectonic shifts carving mountains and plains. Unlike Earth’s chaos, Terra Nova’s small size and guided growth dodge extinctions, amplifying biodiversity. Low-tier Vital Force emerges—lizards bear rune-like scale patterns, sporadically spitting fire via throat glands. James, naming it ‘Jura’ after Earth, revels in its edge over nascent supernatural planets. The Stellar Consortiums, once intrigued, now spurn his Vital Force focus, retracting offers, but James trusts Terra Nova’s resilience and scientific promise. From his flat, he monitors progress, the planet’s expansion mirroring his philosophy—quantity begets quality. Coastal jelly-like structures hint at Aquafluis gelatinosa, droplet-shaped beings unseen by James. This chapter marks Terra Nova’s biological leap, blending natural evolution with faint supernatural flickers, setting the stage for sentient life. James’ vision defies New Pantheon norms, his quiet confidence a bulwark against external doubt as Terra Nova prepares for a sentient dawn.',
      terminology: [
        {
          name: 'Vital Force',
          description:
            'A low-tier supernatural energy, sporadically usable via runes and organs/tools; manifests in Terra Nova’s fauna, e.g., fire-breathing lizards.',
        },
        {
          name: 'Jura Era',
          description:
            'A phase of Terra Nova’s evolution with diverse reptiles and Vital Force, named by James after Earth’s Jurassic period.',
        },
      ],
      character: [
        {
          name: 'James Carter',
          description:
            'A transmigrator adapted to this world for over six months; awakens a 0.85 km dust cloud planet, activates the Supreme Evolution System, chooses a scientific path, uses a Primordial Core to create Terra Nova (now 58.3 km, 312 species) with Vital Force, becomes a Planetary Lord, breaks records, receives a Primordial Essence vial, rejects external offers, and advances Terra Nova to the Jura Era. Member of the New Pantheon.',
          status: 'alive',
        },
      ],
    },
    {
      chapterIndex: 12,
      title: 'The Saurithar Genesis',
      summaryDetail:
        'Chapter 12 sees Terra Nova’s Jura Era peak, its diameter hitting 87.9 km with 502 species. Arid warmth births mammals, birds, and flowering plants—magnolias, willows—feeding antelopes and insects. James, wielding the Supreme Evolution System and Planetary Lord powers, crafts the Saurithar from reptiles. The Saurithar Berserkers, hulking and rage-driven, dominate with Vital Force boosting strength, dulling wits. They enslave the frail Saurithar Scribes, whose rune-etched scales spark primitive magic—flint ignites faintly. Hybrids arise from forced unions, blending traits, often siding with Scribes. James, expecting dinosaurs, finds Terra Nova’s size limits them, yielding unique fauna instead. Berserkers’ roars carry sonic pulses via throat runes, solidifying their rule. Coastal gelatinous domes hint at Aquafluis gelatinosa, droplet-beings in jelly structures, noticed by James. The planet’s biodiversity outpaces fourth-tier supernatural worlds, thrilling him despite lacking Earth’s giants. The Stellar Consortiums mock his Vital Force path, but James envisions a hybrid future. This chapter unveils the Saurithar’s origin, spotlighting Berserker tyranny over Scribes and Hybrid emergence, with low-tier supernatural sparks shaping their nascent society, while an oceanic enigma brews quietly, poised to alter Terra Nova’s fate.',
      terminology: [
        {
          name: 'Saurithar',
          description:
            'A humanoid lizard species engineered by James; Berserkers (rage-empowered, dominant) enslave Scribes (rune-savvy, weak), producing Hybrids.',
        },
        {
          name: 'Aquafluis gelatinosa',
          description:
            'A droplet-shaped oceanic species in jelly-like coastal structures, subtly observed but unexplored by James.',
        },
      ],
      character: [
        {
          name: 'James Carter',
          description:
            'A transmigrator adapted to this world for over six months; awakens a 0.85 km dust cloud planet, activates the Supreme Evolution System, chooses a scientific path, uses a Primordial Core to create Terra Nova (now 87.9 km, 502 species) with Vital Force, becomes a Planetary Lord, breaks records, receives a Primordial Essence vial, rejects external offers, advances Terra Nova to the Jura Era, and creates the Saurithar species. Member of the New Pantheon.',
          status: 'alive',
        },
      ],
    },
    {
      chapterIndex: 13,
      title: 'The Dawn of Tribes',
      summaryDetail:
        'Chapter 13 ushers Terra Nova into the Sapient Era, its diameter breaching 105 km as the Saurithar form tribes. Berserkers roam plains, their rune-claws felling prey with sonic bursts, keeping Scribes in chains crafting tools. Scribes, in secret, refine runes, sparking weak flames for survival. Hybrids, born of servitude, aid Scribes, yearning for freedom. James accelerates time, watching tribal wars—Berserkers’ raw might versus Scribes’ cunning traps. Vital energy surges with sentience, dwarfing animal growth. Two tribes rise: the Berserker-led Rukthar, under Gorzod, enslaving all, and the Scribe-led Valthar, guided by Kress, a frail innovator whose runes light hovels. Rukthar’s raids crush Valthar outposts, Gorzod’s roars quaking earth, while Kress’ sparks barely hold. James observes, letting nature carve its path, confident in Terra Nova’s potential. The planet’s unique physics—beyond Earth’s conduction dichotomy—hints at ‘charge storage,’ a trait James notes in rune-flickers storing energy, distinct to Terra Nova among New Pantheon worlds. This chapter frames the Saurithar’s tribal strife, Berserker dominance, and the Scribes’ quiet rebellion',
      terminology: [
        {
          name: 'Sapient Era',
          description:
            'Terra Nova’s phase where sentient Saurithar drive growth via intellect and Vital Force.',
        },
        {
          name: 'Charge Storage',
          description:
            'A unique physics trait of Terra Nova, beyond Earth’s conduction, allowing energy storage and release via conductors; varies across planets.',
        },
      ],
      character: [
        {
          name: 'James Carter',
          description:
            'A transmigrator adapted to this world for over six months; awakens a 0.85 km dust cloud planet, activates the Supreme Evolution System, chooses a scientific path, uses a Primordial Core to create Terra Nova (now 105 km, 502+ species) with Vital Force, becomes a Planetary Lord, breaks records, receives a Primordial Essence vial, rejects external offers, advances Terra Nova to the Jura Era, creates the Saurithar, and observes their tribal rise in the Sapient Era. Member of the New Pantheon.',
          status: 'alive',
        },
        {
          name: 'Kress',
          description:
            'Leader of the Valthar tribe, a Saurithar Scribe enslaved by Berserkers, gifted with rune-crafting sparking small flames. Native to Terra Nova.',
          status: 'alive',
        },
        {
          name: 'Gorzod',
          description:
            'Chieftain of the Rukthar tribe, a Saurithar Berserker whose rage-fueled Vital Force quakes the ground, enslaving Scribes. Native to Terra Nova.',
          status: 'alive',
        },
      ],
    },
    {
      chapterIndex: 14,
      title: 'The Forge of Unity',
      summaryDetail:
        'Chapter 14 marks James’ first direct intervention in Terra Nova’s Sapient Era, descending as divine oracles to aid Kress against Gorzod’s tyranny. Rukthar Berserkers wield rune-spears with sonic tips, while enslaved Valthar Scribes craft electrified staffs under duress, their Vital Force limited to rune-bearers. Hybrids toil beside them, resentful. James’ voice echoes to Kress beneath a sacred tree: ‘What divides might from mastery?’ Kress, grasping cooperation, offers Gorzod tribute—grain, tools—feigning subservience. Over years, James’ oracles guide Kress in patience and guile, leveraging Terra Nova’s ‘charge storage’ physics—runes hold energy, releasing it via conductors, unlike Earth’s binary flow. Kress hosts Gorzod, using stored spark-runes to dazzle, brokering a fragile truce. The tribes unite as the Saurith Dominion, Kress as strategist, Gorzod as muscle, Hybrids freed but wary. Terra Nova hits 112 km, vital energy spiking with unity. This chapter highlights Kress’ rise through James’ divine nudge, the Saurithar’s shaky alliance, and Terra Nova’s unique physics amplifying low-tier Vital Force, setting a foundation for liberation and ',
      terminology: [],
      character: [
        {
          name: 'James Carter',
          description:
            'A transmigrator adapted to this world for over six months; awakens a 0.85 km dust cloud planet, activates the Supreme Evolution System, chooses a scientific path, uses a Primordial Core to create Terra Nova (now 112 km, 502+ species) with Vital Force, becomes a Planetary Lord, breaks records, receives a Primordial Essence vial, rejects external offers, advances Terra Nova to the Jura Era, creates the Saurithar, observes their tribal rise, and guides Kress via oracles to unify tribes. Member of the New Pantheon.',
          status: 'alive',
        },
        {
          name: 'Kress',
          description:
            'Leader of the Valthar tribe, a Saurithar Scribe enslaved by Berserkers, gifted with rune-crafting; unites tribes into the Saurith Dominion with James’ oracles. Native to Terra Nova.',
          status: 'alive',
        },
        {
          name: 'Gorzod',
          description:
            'Chieftain of the Rukthar tribe, a Saurithar Berserker whose rage-fueled Vital Force quakes the ground; joins the Saurith Dominion under Kress’ truce. Native to Terra Nova.',
          status: 'alive',
        },
      ],
    },
    {
      chapterIndex: 15,
      title: 'The Saurith Dominion',
      summaryDetail:
        'Chapter 15 spans two decades as the Saurith Dominion solidifies, Terra Nova reaching 120 km. James’ oracles steer Kress, who plants crops—grains, roots—and domesticates beasts, while Gorzod drills warriors with rune-spears sparking fire or shocks, usable only by rune-marked Saurithar. Scribes, once slaves, gain leverage, Hybrids bolstering them. Valthruk rises as a stone-and-timber capital, Kress codifying runes into script. After years under Gorzod’s yoke, Kress trains a rune-armed militia, outclassing Rukthar’s brutes. In a climactic battle, Kress’ electrified traps ensnare Gorzod’s forces; the chieftain falls, his last roar sonic. Kress crowns himself First Lord, uniting the Dominion. Before dying of age, he hails James as ‘Sky Father,’ seeking his blessing via oracle. James’ voice resounds, praising Kress and eyeing succession. The planet’s vital energy soars with organized society. Berserkers submit, Hybrids rise, Scribes dominate. Aquafluis, a jelly-like creature arrive offshore, unnoticed by the Saurithar but noticed by James. This creature show some sort of intelligence (These created some kind of structure seems to have attributes mixing between jelly and glass, look like pyramid, used to hatch there eggs.). Aquafluis having these crystal core inside body which can create some type of rune unknown to the Saurithar. This chapter charts the Dominion’s birth through Kress’ liberation, Gorzod’s demise, and James’ divine hand, showcasing Terra Nova’s growth as a low-tier supernatural world where rune-tech shifts power, priming it for a new ruler amid an evolving, dual-species landscape. ',
      terminology: [
        {
          name: 'Saurith Dominion',
          description:
            'A unified Saurithar nation formed by Kress, shifting power from Berserkers to Scribes, centered at Valthruk.',
        },
      ],
      character: [
        {
          name: 'James Carter',
          description:
            'A transmigrator adapted to this world for over six months; awakens a 0.85 km dust cloud planet, activates the Supreme Evolution System, chooses a scientific path, uses a Primordial Core to create Terra Nova (now 120 km, 502+ species) with Vital Force, becomes a Planetary Lord, breaks records, receives a Primordial Essence vial, rejects external offers, advances Terra Nova to the Jura Era, creates the Saurithar, guides Kress via oracles to unify tribes into the Saurith Dominion, and accepts ‘Sky Father.’ Member of the New Pantheon.',
          status: 'alive',
        },
        {
          name: 'Kress',
          description:
            'Leader of the Valthar tribe, a Saurithar Scribe enslaved by Berserkers, gifted with rune-crafting; unites tribes into the Saurith Dominion, defeats Gorzod, becomes First Lord, and dies of age after naming James ‘Sky Father.’ Native to Terra Nova.',
          status: 'dead',
        },
        {
          name: 'Gorzod',
          description:
            'Chieftain of the Rukthar tribe, a Saurithar Berserker whose rage-fueled Vital Force quakes the ground; joins then loses to Kress, dying in battle. Native to Terra Nova.',
          status: 'dead',
        },
      ],
    },
    {
      chapterIndex: 16,
      title: 'The Heir Apparent',
      summaryDetail:
        'Chapter 16 centers on Kress’ succession as death nears, Terra Nova at 120 km. With 40 offspring, Kress falters—many wield runes or strength, echoing his reign. He implores ‘Sky Father’ James, who descends as an oracle, running Supreme Evolution System simulations: one for might or mercy, another for science, choosing Zethar, Kress’ ninth child, aged 10, for his rune curiosity. Kress, awed, names Zethar heir before Valthruk’s masses, teaching him to revere James’ voice. Zethar kneels, overwhelmed, as Kress dies, dubbed ‘Kress the Unifier.’ James promises divine guidance, envisioning a techno-rune era. Saurithar mourn with rune-lit pyres, Berserkers chant, Hybrids pledge to Zethar. Vital Force flickers—spears spark, limited to rune-marked wielders. Terra Nova’s vital energy steadies, ripe for renewal. This chapter captures Kress’ noble end, Zethar’s rise against odds, and James’ shift to direct mentorship, steering the Saurithar toward a future where low-tier Vital Force and science meld.',
      terminology: [],
      character: [
        {
          name: 'James Carter',
          description:
            'A transmigrator adapted to this world for over six months; awakens a 0.85 km dust cloud planet, activates the Supreme Evolution System, chooses a scientific path, uses a Primordial Core to create Terra Nova (120 km, 502+ species) with Vital Force, becomes a Planetary Lord, breaks records, receives a Primordial Essence vial, rejects external offers, advances Terra Nova to the Jura Era, creates the Saurithar, guides Kress via oracles to unify tribes into the Saurith Dominion, accepts ‘Sky Father,’ and selects Zethar as heir via oracle. Member of the New Pantheon.',
          status: 'alive',
        },
        {
          name: 'Kress',
          description:
            'Leader of the Valthar tribe, a Saurithar Scribe enslaved by Berserkers, gifted with rune-crafting; unites tribes into the Saurith Dominion, defeats Gorzod, becomes First Lord, dies of age after naming James ‘Sky Father’ and Zethar heir, revered as ‘Kress the Unifier.’ Native to Terra Nova.',
          status: 'dead',
        },
        {
          name: 'Zethar',
          description:
            'Kress’ ninth child, a Saurithar Scribe aged 10, chosen by James’ oracle for rune curiosity; named heir to the Saurith Dominion. Native to Terra Nova.',
          status: 'alive',
        },
      ],
    },
    {
      chapterIndex: 17,
      title: 'Zethar’s Reign',
      summaryDetail:
        'Chapter 17 tracks Zethar’s rule over the Saurith Dominion, starting at 10 after Kress’ death, Terra Nova at 120 km. Elders govern, bolstered by Kress’ legacy, as James descends via oracles for a decade, teaching rune mastery and leadership. At 20, Zethar takes command, his intellect eclipsing Kress’. He refines runes into a script, forms a council, and swells the population past 100,000, building cities around Valthruk. Vital Force evolves—Scribes craft electrified spears, Berserkers wield sonic clubs, usable only by rune-marked Saurithar. Dissent brews: Gorzod’s kin, led by Torm, and Kress’ eldest, Varn, defy Zethar’s youth. On coronation night, Torm’s Berserkers siege Valthruk, Varn’s troops flank. Zethar, guided by James’ oracle, deploys rune-oil traps—petroleum ignites via Vital Force, roasting Torm’s ranks. Torm falls; Varn yields, executed for softness per James’ decree. Zethar’s rule hardens, eyeing scientific leaps. This chapter showcases Zethar’s brilliance under James’ divine voice, the Dominion’s feudal shift, and Vital Force’s weaponized edge, cementing a hybrid path amid strife, ',
      terminology: [],
      character: [
        {
          name: 'James Carter',
          description:
            'A transmigrator adapted to this world for over six months; awakens a 0.85 km dust cloud planet, activates the Supreme Evolution System, chooses a scientific path, uses a Primordial Core to create Terra Nova (120 km, 502+ species) with Vital Force, becomes a Planetary Lord, breaks records, receives a Primordial Essence vial, rejects external offers, advances Terra Nova to the Jura Era, creates the Saurithar, guides Kress via oracles to unify tribes into the Saurith Dominion, accepts ‘Sky Father,’ selects Zethar as heir via oracle, and mentors him directly for a decade. Member of the New Pantheon.',
          status: 'alive',
        },
        {
          name: 'Zethar',
          description:
            'Kress’ ninth child, a Saurithar Scribe aged 10, chosen by James’ oracle; assumes Dominion rule at 20, defeats Torm and Varn with rune-oil traps, cementing power. Native to Terra Nova.',
          status: 'alive',
        },
        {
          name: 'Torm',
          description:
            'A Saurithar Berserker, Gorzod’s kin, leads a rebellion against Zethar and dies in a rune-oil blaze. Native to Terra Nova.',
          status: 'dead',
        },
        {
          name: 'Varn',
          description:
            'Kress’ eldest, a Saurithar Scribe with diplomatic leanings; rebels against Zethar, surrenders, and is executed. Native to Terra Nova.',
          status: 'dead',
        },
      ],
    },
    {
      chapterIndex: 18,
      title: 'The Age of Ingenuity',
      summaryDetail:
        'Chapter 18 celebrates Zethar’s triumph and the Saurith’s technological dawn after James’ decade-long oracles. Terra Nova holds at 120 km, its vital energy refined. Zethar elevates the Forge Guild, naming smiths ‘Masters,’ and unveils five innovations: parchment from fibers, rune-pressed printing, magnetic compasses, oil weaponry, and the Rune Sorting Tablet—a fantasy slab aligning runes for amplified Vital Force effects, glowing faintly. James’ Earth-knowledge, delivered via divine voice, fuels these leaps. Rune-spears spark fire or electricity, restricted to rune-marked Saurithar, their dual ends linking weapon to body runes. (Note: Most Saurith has rune on their scale or body, but most has rune character on their back or tail or foot, which make them unable to use these spears. Only one with rune character on the hand can use these spear ) The Saurith surge from tribal roots to feudalism, outpacing Earth, though arts lag. Torm’s defeat and Varn’s execution solidify Zethar’s reign; population booms, cities rise, Valthruk a rune-lit hub. Essence nears depletion, prompting James to halt acceleration and seek more. This chapter exalts Zethar’s genius, the Saurith’s blend of science and low-tier supernatural runes—highlighted by the mystical Tablet—under James’ guidance, while resource scarcity looms, pushing Terra Nova toward a pivotal shift.',
      terminology: [
        {
          name: 'Forge Guild',
          nameBefore: '',
          description:
            'The Saurith’s elite crafting body, evolving from Kress’ workshops, producing rune-enhanced tools and weapons.',
        },
        {
          name: 'Rune Sorting Tablet',
          nameBefore: '',
          description:
            'A mystical slab aligning runes to amplify Vital Force, a fantasy invention by Zethar under James’ oracle.',
        },
      ],
      character: [
        {
          name: 'James Carter',
          nameBefore: 'Giang Phàm',
          description:
            'A transmigrator adapted to this world for over six months; awakens a 0.85 km dust cloud planet, activates the Supreme Evolution System, chooses a scientific path, uses a Primordial Core to create Terra Nova (120 km, 502+ species) with Vital Force, becomes a Planetary Lord, breaks records, receives a Primordial Essence vial, rejects external offers, advances Terra Nova to the Jura Era, creates the Saurithar, guides Kress via oracles to unify tribes, accepts ‘Sky Father,’ selects Zethar as heir via oracle, mentors him directly for a decade, and inspires five inventions. Member of the New Pantheon.',
          status: 'alive',
        },
        {
          name: 'Zethar',
          nameBefore: 'Khải',
          description:
            'Kress’ ninth child, a Saurithar Scribe aged 10, chosen by James’ oracle; assumes rule at 20, defeats Torm and Varn with rune-oil traps, and introduces parchment, printing, compasses, oil weapons, and the Rune Sorting Tablet. Native to Terra Nova.',
          status: 'alive',
        },
      ],
    },
    {
      chapterIndex: 19,
      title: 'The Rune of Storage',
      summaryDetail:
        'Chapter 19 unveils a groundbreaking shift as Terra Nova, at 120 km, enters a new era defined by its unique ‘charge storage’ physics—a trait distinct from Earth’s mere conduction or insulation. Here, energy can be trapped within materials and released through conductors, a quirk James notes sets Terra Nova apart from other New Pantheon planets, each with bespoke physical laws. This revolution ignites when Valthruk’s high priest, Tharok, a devout Saurithar Scribe, invents the Storage Rune. Previously, Saurith Dominion warriors wielded dual-ended rune-spears—fire or electric tips linked to body runes by some kind of wire similar to electric wire—usable only by one with rune-marked on hand Saurithar, their Vital Force erratic. Tharok’s Storage Rune, etched on spear shafts, harnesses this charge storage, trapping Vital Force in rune-lines for release via contact with conductors, bypassing innate talent. Tests stun onlookers— unmarked Scribes wield electrified spears, tips blazing with stored energy; Berserkers amplify roars with sonic bursts; Hybrids wield both seamlessly. The Forge Guild mass-produces these, shattering rune-born limits. James, via oracle, praises Tharok’s fusion of faith, science, and Terra Nova’s traits, envisioning tools and defenses unbound by biology. Now, under his rules, the Saurithar is never this strong. Zethar think tribe and Dominion is not enough, he decided to declare the new kingdom with a system of mandarins instead of the current tribe chiefs. This chapter marks a techno-rune renaissance, the Storage Rune democratizing Vital Force, amplifying Valtharion’s might.',
      terminology: [
        {
          name: 'Storage Rune',
          nameBefore: '',
          description:
            'A rune invented by Tharok, storing Vital Force energy for release via conductors, breaking reliance on innate rune-marks.',
        },
        {
          name: 'Charge Storage',
          nameBefore: '',
          description:
            'A unique physics trait of Terra Nova, allowing energy to be trapped in materials and released through conductors, distinct from Earth.',
        },
      ],
      character: [
        {
          name: 'James Carter',
          nameBefore: 'Giang Phàm',
          description:
            'Planetary Lord of Terra Nova; guides Tharok via oracles to invent the Storage Rune, praises its revolutionary impact.',
          status: 'alive',
        },
        {
          name: 'Tharok',
          nameBefore: 'Hàn',
          description:
            'High priest and Saurithar Scribe in Valthruk; invents the Storage Rune under James’ guidance, ushering in a techno-rune era.',
          status: 'alive',
        },
        {
          name: 'Zethar',
          nameBefore: 'Khải',
          description:
            'King of Valtharion; oversees the Storage Rune’s adoption, wielding the Thunderhowl Scepter as ruler.',
          status: 'alive',
        },
      ],
    },
    {
      chapterIndex: 20,
      title: 'The Founding of Valtharion',
      summaryDetail:
        'Chapter 20 marks the birth of Valtharion, a new Saurith nation rising from the Saurith Dominion’s ashes, as Zethar ascends to kingship amid roaring crowds in Valthruk. (should describe the ceremony, Zethar holding the best spear made by the best craftman - have both lightning and sonic power). Zethar decrees a statue of James—imagined as a towering, rune-clad lizard-god with electric eyes, not his true human form—erected in the city square, symbolizing divine favor. James, wielding the Primordial Essence vial, blesses Zethar’s coronation by transforming his spear—forged with sonic and electric runes —into the divine *Thunderhowl Scepter*. This holy-weapon boasts two abilities: a lightning bolt striking 100 meters ahead and a sonic-electric burst erupting 20 meters around, each use requiring a 24-hour cooldown. As Zethar lifts the glowing scepter, Valtharion"s citizen erupts in cheers, Saurithar chanting ‘Sky Father’ to James. Zethar founded the Rune Legionaries, elite legions equipped with state-of-the-art rune weapons and armor, and well-trained. This chapter captures Valtharion’s founding, Zethar’s crowning, and the scepter’s creation, cementing James’ mythic status as Terra Nova braces for cosmic horizons.',
      terminology: [
        {
          name: 'Valtharion',
          nameBefore: 'Vũ quốc',
          description:
            'A new Saurith nation founded by Zethar, succeeding the Saurith Dominion, centered in Valthruk.',
        },
        {
          name: 'Thunderhowl Scepter',
          nameBefore: '',
          description:
            'A divine weapon crafted by James from Zethar’s spear, wielding lightning (100 meters) and sonic-electric burst (20m) with a 24-hour cooldown.',
        },
      ],
      character: [
        {
          name: 'James Carter',
          nameBefore: 'Giang Phàm',
          description:
            'Planetary Lord of Terra Nova; uses Primordial Essence to craft the Thunderhowl Scepter, blesses Zethar’s coronation, revered as ‘Sky Father’ by Saurithar.',
          status: 'alive',
        },
        {
          name: 'Zethar',
          nameBefore: 'Khải',
          description:
            'Former Dominion ruler, now King of Valtharion; crowned with the Thunderhowl Scepter, decrees James’ statue, leads Saurith into a new era.',
          status: 'alive',
        },
      ],
    },
    {
      chapterIndex: 20,
      title: 'The Celestial Exchange',
      summaryDetail:
        'Chapter 20 shifts to James at the Planetary Guild in Rivergate City, a 99-story nexus of New Pantheon trade. With essence dwindling, he seeks fuel for Terra Nova’s growth. Options loom: buy vials at $10,000—steep beyond his $100,000 reward’s remnants—or raid unclaimed planets, their Essence Shards ripe from fallen Lords. The guild offers a free first raid; James picks a decaying martial planet, conserving his savings, wary of supernatural remnants. Back home, he meets Zethar in the awakening space, the ruler now wielding Storage Rune spears, his curiosity piercing Terra Nova’s bounds. Zethar, theorizing other worlds, beams as James reveals his plan: plunder essence, forge a portal, and connect outward. The Storage Rune’s versatility—storing Vital Force for all—sparks Zethar’s ambition. Terra Nova’s vital energy hums, ripe for expansion. This chapter bridges internal innovation to cosmic reach, spotlighting James’ resource quest, Zethar’s zeal, and the Storage Rune’s game-changing edge.',
      terminology: [
        {
          name: 'Planetary Guild',
          description:
            'A New Pantheon hub in Rivergate City where Planetary Lords trade or claim Essence Shards.',
        },
        {
          name: 'Essence Shards',
          description:
            'Fragments of collapsed planets, rich in Primordial Essence, harvestable by Lords like James.',
        },
      ],
      character: [
        {
          name: 'James Carter',
          description:
            'A transmigrator adapted to this world for over six months; awakens a 0.85 km dust cloud planet, activates the Supreme Evolution System, chooses a scientific path, uses a Primordial Core to create Terra Nova (120 km, 502+ species) with Vital Force, becomes a Planetary Lord, breaks records, receives a Primordial Essence vial, rejects external offers, advances Terra Nova to the Jura Era, creates the Saurithar, guides Kress via oracles to unify tribes into the Saurith Dominion, accepts ‘Sky Father,’ selects Zethar as heir via oracle, mentors him directly for a decade, inspires five inventions, praises the Storage Rune, and plans to raid a dead planet. Member of the New Pantheon.',
          status: 'alive',
        },
        {
          name: 'Zethar',
          description:
            'Kress’ ninth child, a Saurithar Scribe aged 10, chosen by James’ oracle; assumes Dominion rule at 20, defeats Torm and Varn with rune-oil traps, introduces parchment, printing, compasses, oil weapons, and the Rune Sorting Tablet, invents the Storage Rune, and learns of James’ portal plan. Native to Terra Nova.',
          status: 'alive',
        },
      ],
    },

    {
      chapterIndex: 20,
      title: 'The Cosmic Gateway',
      summaryDetail:
        'Chapter 20 opens with James Carter briefing Zethar, now King of Valtharion, via oracle about a cosmic rift opening in three months, linking Terra Nova—now 122 km—to an unclaimed Warrior Planet. Zethar, awestruck, learns the natives of the planet are also supernatural species-enhanced warriors with strenth surpassing Saurithar Berserkers, their power can even pass to the weapon, making the most dull weapon become an extremely dangerous one. James assures him their scarcity allows Valtharion’s numbers to prevail, urging meticulous preparation akin to hunting apex beasts. After the oracle fades, Zethar, both daunted and eager, rallies 10,000 elite Rune Legionaries—Valtharion’s finest—training them relentlessly in Valthruk’s ravines. James, using the time dilation, compresses this into a day externally. He boards a Stellar Skiff from the New Pantheon,  alongside other Planetary Lords seeking Essence Shards. The skiff enters a vast rift-cavern, revealing the Unclaimed Expanse. James activates his rift sigil, eager for Terra Nova’s first off-world conquest, while Zethar muses if ‘Sky Father’ aims to plunder rival realms—a suspicion James silently confirms.',
      terminology: [
        {
          name: 'Rune Legionaries',
          nameBefore: 'Đại Hoang quân',
          description:
            'Valtharion’s elite force of 10,000, armed with Storage Rune-enhanced spears, trained for off-world conquest.',
        },
        {
          name: 'Unclaimed Expanse',
          nameBefore: 'Vô chủ Tinh Vực',
          description:
            'A cosmic region of unclaimed planets, ripe for Planetary Lords to harvest Essence Shards.',
        },
      ],
      character: [
        {
          name: 'James Carter',
          nameBefore: 'Giang Phàm',
          description:
            'Planetary Lord of Terra Nova; initiates rift conquest, guides Zethar via oracles, boards the Stellar Skiff for the Unclaimed Expanse.',
          status: 'alive',
        },
        {
          name: 'Zethar',
          nameBefore: 'Khải',
          description:
            'King of Valtharion; trains the Rune Legionaries for cosmic war, awed by James’ rift plan and the promise of alien worlds.',
          status: 'alive',
        },
      ],
    },
    {
      chapterIndex: 20,
      title: 'The Cosmic Gateway',
      summaryDetail:
        'Chapter 20 opens with James Carter briefing Zethar, now King of Valtharion, via oracle about a cosmic rift opening in three months, linking Terra Nova—now 122 km—to an unclaimed martial husk. Zethar, awestruck, learns the natives are Vital Force-enhanced warriors surpassing Saurithar Berserkers in skill. James assures him their scarcity allows Valtharion’s numbers to prevail, urging meticulous preparation akin to hunting apex beasts. After the oracle fades, Zethar, both daunted and eager, rallies 10,000 elite Rune Legionaries—Valtharion’s finest—training them relentlessly in Valthruk’s ravines. James, using the Supreme Evolution System’s time dilation, compresses this into a day externally. He boards a Stellar Skiff from the New Pantheon, etched with transit runes, alongside other Planetary Lords seeking Essence Shards. The skiff enters a vast rift-cavern, revealing the Unclaimed Expanse. James activates his rift sigil, eager for Terra Nova’s first off-world conquest, while Zethar muses if ‘Sky Father’ aims to plunder rival realms—a suspicion James silently confirms.',
      terminology: [
        {
          name: 'Rune Legionaries',
          nameBefore: 'Đại Hoang quân',
          description:
            'Valtharion’s elite force of 10,000, armed with Storage Rune-enhanced spears, trained for off-world conquest.',
        },
        {
          name: 'Unclaimed Expanse',
          nameBefore: 'Vô chủ Tinh Vực',
          description:
            'A cosmic region of unclaimed planets, ripe for Planetary Lords to harvest Essence Shards.',
        },
      ],
      character: [
        {
          name: 'James Carter',
          nameBefore: 'Giang Phàm',
          description:
            'Planetary Lord of Terra Nova; initiates rift conquest, guides Zethar via oracles, boards the Stellar Skiff for the Unclaimed Expanse.',
          status: 'alive',
        },
        {
          name: 'Zethar',
          nameBefore: 'Khải',
          description:
            'King of Valtharion; trains the Rune Legionaries for cosmic war, awed by James’ rift plan and the promise of alien worlds.',
          status: 'alive',
        },
      ],
    },
    {
      chapterIndex: 21,
      title: 'Into the Martial Husk',
      summaryDetail:
        "Chapter 21 sees Terra Nova’s rift—activated by James’ sigil—open as a shimmering 30-foot gate above Valthruk’s ravine after three months of Zethar’s grueling drills. The Rune Legionaries, clad in rune-forged armor, stand ready as Zethar, wielding the Thunderhowl Scepter, inspires them: 'Show our valor beyond the stars!' James observes via awakening space as Zethar leads them through, emerging on a decaying Martial planet —its 90 km diameter shrouded in ashen skies, its Vital Force nearly spent. Vegetation is scarce, the air thin with fading rune-energy. Zethar, cautious, camps the legion in a crater, dispatching scouts. They spot three emaciated martial natives—ragged yet radiating power beyond Saurithar elites in technique. One flees to warn others, alarming Zethar. On the Stellar Skiff, James notes the husk’s past as a mid-tier martial realm, now a shadow of its glory, confident in Zethar’s preparation for this first test.",
      terminology: [
        {
          name: 'Martial planet',
          nameBefore: 'Võ Giả tinh cầu',
          description:
            'A near-dead planet once thriving with martial rune-warriors, now reduced to 90 km, its Vital Force depleted.',
        },
      ],
      character: [
        {
          name: 'James Carter',
          nameBefore: 'Giang Phàm',
          description:
            'Planetary Lord; opens the rift to the martial husk, monitors Zethar’s campaign from awakening space.',
          status: 'alive',
        },
        {
          name: 'Zethar',
          nameBefore: 'Khải',
          description:
            'King of Valtharion; leads the Rune Legionaries through the rift, camps cautiously, and faces the husk’s natives.',
          status: 'alive',
        },
      ],
    },
    {
      chapterIndex: 22,
      title: 'Warriors vs. Legion Might',
      summaryDetail:
        'Chapter 22 escalates as Zethar’s scouts report 58 martial warriors—led by a 6’3” bald brute with a 6-foot blade—approaching the crater. Starved and feral, they view the legion as prey. A Berserker clashes with a warrior; though slightly outmatched by the Berserker’s raw power, the warrior’s human-like body twists with uncanny flexibility—joints bending near 360 degrees—executing moves impossible for Saurithar. Infusing Vital Force into his blade, he slices through the Berserker’s armor like mud, felling him with seasoned skill. Zethar fortifies the crater, sealing its rim with boulders save a narrow choke, embedding electric and sonic runes as traps. The warriors charge, deflecting bronze-tipped arrows with ease, mocking the legion’s frailty. James observes their martial prowess, noting their energy-weapon synergy, as Zethar lures them into the rune trap.',
      terminology: [
        {
          name: 'Rune-Blade',
          nameBefore: '',
          description:
            'A massive weapon infused with Vital Force, wielded by martial warriors, capable of cutting iron like mud.',
        },
        {
          name: 'Electric Rune Trap',
          nameBefore: '',
          description:
            'A trap using Storage Runes to deliver electric shocks, stunning foes in confined spaces.',
        },
      ],
      character: [
        {
          name: 'James Carter',
          nameBefore: 'Giang Phàm',
          description:
            'Planetary Lord; analyzes the warriors’ superior technique, trusts Zethar’s trap strategy.',
          status: 'alive',
        },
        {
          name: 'Zethar',
          nameBefore: 'Khải',
          description:
            'King of Valtharion; sets rune traps, lures warriors into the choke, leveraging legion numbers.',
          status: 'alive',
        },
      ],
    },
    {
      chapterIndex: 23,
      title: 'The Battle of Wits',
      summaryDetail:
        'Chapter 23 erupts as Zethar triggers the rune traps: electric shocks jolt the warriors, sonic bursts disorient them, and oil ignites into choking smoke. Most stagger, but the strongest—including the bald brute—recover swiftly, astonishing Zethar with their resilience. The brute, spotting Zethar commanding from the choke, charges with his blade blazing (not actually blazing, but the energy inside it made it look like blazing), felling 20 legionaries. Zethar unleashes a 100-meter lightning bolt from the Thunderhowl Scepter, vaporizing the brute mid-leap. The remaining 57 fall to spears and arrows, though 250 legionaries die. Zethar captures five warriors alive for study, then circles the husk, witnessing its slow collapse—90 km fracturing into boulders, then pebbles, then dust over hours. He collects weapons as tribute, proving Valtharion’s triumph over martial might.',
      terminology: [
        {
          name: 'Sonic Rune Trap',
          nameBefore: '',
          description:
            'A trap using Storage Runes to emit disorienting sonic waves, paired with electric shocks.',
        },
      ],
      character: [
        {
          name: 'James Carter',
          nameBefore: 'Giang Phàm',
          description:
            'Planetary Lord; marvels at Zethar’s victory and the husk’s decay, anticipates warrior research.',
          status: 'alive',
        },
        {
          name: 'Zethar',
          nameBefore: 'Khải',
          description:
            'King of Valtharion; uses Thunderhowl Scepter to win, captures warriors, surveys the husk’s ruin.',
          status: 'alive',
        },
      ],
    },
    {
      chapterIndex: 24,
      title: 'Unexpected Harvest',
      summaryDetail:
        'Chapter 24 follows the Rune Legionaries’ return with martial spoils: blades, four combat scrolls, and captured warriors. James accelerates the husk’s decay with Primordial Essence, extracting half an Essence Shard—meager due to its low tier. The husk crumbles fully to dust. In Valthruk, Zethar studies the warriors’ flexible joints and energy infusion, but over 100 legionaries succumb to infections—Terra Nova’s healing arts lag. James claims the scrolls via awakening space, planning a Rivergate trade. The victory strengthens Valtharion, though its medical gaps spur Zethar to innovate further.',
      terminology: [
        {
          name: 'Essence Shard',
          nameBefore: 'Bổn nguyên chi lực',
          description: 'Vital energy harvested from dying planets, fueling Terra Nova’s growth.',
        },
      ],
      character: [
        {
          name: 'James Carter',
          nameBefore: 'Giang Phàm',
          description:
            'Planetary Lord; harvests Essence Shard, claims scrolls, notes Terra Nova’s healing flaws.',
          status: 'alive',
        },
        {
          name: 'Zethar',
          nameBefore: 'Khải',
          description:
            'King of Valtharion; studies captives, mourns losses, pushes for advancements post-victory.',
          status: 'alive',
        },
      ],
    },
    {
      chapterIndex: 25,
      title: 'Celestial Exchange',
      summaryDetail:
        'Chapter 25 shifts to James at Rivergate, trading four martial scrolls. Due to planetary differences—energy types and biology (warriors’ 360-degree joints vs. Saurithar rigidity)—most are planet-specific, valued low. One scroll, however,is a ‘conceptual’ blade technique adaptable across realms, fetches 5,000 $; the rest are near-worthless. James muses that universal knowledge is rare, unlike Terra Nova’s limited scope. Back home, now 124 km, Valtharion celebrates, but Zethar, haunted by the warriors’ might and infection toll, vows to evolve beyond numbers. The trade bolsters Terra Nova’s New Pantheon standing, though its potential remains constrained.',
      terminology: [
        {
          name: 'Stellars',
          nameBefore: 'Đồng liên bang',
          description: 'Currency of the New Pantheon, earned through cosmic trade.',
        },
        {
          name: 'Conceptual Technique',
          nameBefore: '',
          description:
            'A rare, adaptable skill applicable across planets, unlike most planet-specific knowledge.',
        },
      ],
      character: [
        {
          name: 'James Carter',
          nameBefore: 'Giang Phàm',
          description:
            'Planetary Lord; trades scrolls, reflects on universal vs. local knowledge, tracks Valtharion’s rise.',
          status: 'alive',
        },
        {
          name: 'Zethar',
          nameBefore: 'Khải',
          description:
            'King of Valtharion; ponders victory’s cost, drives innovation against future threats.',
          status: 'alive',
        },
      ],
    },
    {
      chapterIndex: 26,
      title: 'Sonic Arms Unveiled',
      summaryDetail:
        'Chapter 26 finds Zethar brooding over the martial warriors’ prowess during Valtharion’s feast. He queries James’ oracle: if dozens were so fierce, how can thousands be stopped? James, via rune-mist, recounts Kress’ wit-based triumph, asking why arrows fail Vital Force foes. Zethar cites their agility, but James suggests weapons matching sound’s speed—unavoidable even to warriors. Zethar, stunned, deems it improbable. James said it is possible, and Zethar boasting of parchment, printing, and oil traps (his inventions) to show his knowdledge and widsdom. James counters his knowledge skims nature’s surface, sparking Zethar’s quest for deeper science beyond runes.',
      terminology: [
        {
          name: 'Sonic Weapons',
          nameBefore: 'Tốc độ siêu âm vũ khí',
          description:
            'Hypothetical arms matching sound’s speed, proposed by James to counter Vital Force foes.',
        },
      ],
      character: [
        {
          name: 'James Carter',
          nameBefore: 'Giang Phàm',
          description:
            'Planetary Lord; challenges Zethar with sonic weapon idea, pushes for scientific depth.',
          status: 'alive',
        },
        {
          name: 'Zethar',
          nameBefore: 'Khải',
          description:
            'King of Valtharion; doubts sonic feasibility, defends his crafts, ignited by James’ vision.',
          status: 'alive',
        },
        {
          name: 'Kress',
          nameBefore: 'Hoang',
          description: 'Zethar’s father; his wit-based victory inspires James’ lesson.',
          status: 'dead',
        },
      ],
    },
    {
      chapterIndex: 27,
      title: 'The Six Enigmas',
      summaryDetail:
        'Chapter 27 sees James pose six enigmas via oracle—why water flows down, cold sickens, sound outpaces arrows, coal burns, beasts breed true, and Vital Force empowers some—stumping Zethar. He declares ‘Science’ the study of universal laws, entry requiring enigma solutions. Zethar, humbled, splits Valthruk’s scholars into the Science Spire (laws) and Forge Guild (craft), gifting *The Compendium of Works*—an Earth-derived tome of agriculture, industry, and crafts tailored for Terra Nova—as the Spire’s foundation. The enigmas become its creed, with the Valtharion Prize for breakthroughs, launching a scientific era as Terra Nova hits 126 km.',
      terminology: [
        {
          name: 'Science Spire',
          nameBefore: 'Khác vật học viện',
          description:
            'An institute studying universal laws, founded by Zethar to unravel James’ enigmas.',
        },
        {
          name: 'The Compendium of Works',
          nameBefore: 'Thiên Công Khai Vật',
          description:
            'A filtered encyclopedia of agriculture, crafts, and industry, gifted by James for Terra Nova’s era.',
        },
      ],
      character: [
        {
          name: 'James Carter',
          nameBefore: 'Giang Phàm',
          description:
            'Planetary Lord; poses enigmas, gifts *The Compendium of Works*, ignites Valtharion’s scientific age.',
          status: 'alive',
        },
        {
          name: 'Zethar',
          nameBefore: 'Khải',
          description:
            'King of Valtharion; founds Science Spire and Forge Guild, inspired by James’ enigmas.',
          status: 'alive',
        },
      ],
    },
    {
      chapterIndex: 28,
      title: 'The Micro Realm',
      summaryDetail:
        'Chapter 28 spans a decade via James’ time dilation. A Science Spire scholar crafts a crude microscope, revealing microbes in cold water—solving the second enigma: boiling kills unseen pests. He wins the Valtharion Prize. Terra Nova reaches 128 km, its legions wielding enhanced spears from warrior studies. Zethar, aging, bolsters Valtharion with martial spoils, but healing lags.Zethar believes that it is necessary to quickly rely on techniques to increase combat power -> Invent cavalry. But Terra Nova doesnt have horses, so it uses a large herbivorous lizard instead. This species resembles a rhinoceros and triceraptor, but has 3 pairs of horns, and its tail carries a hard club, making it very difficult to tame. ',
      terminology: [
        {
          name: 'Microscope',
          nameBefore: 'Kính hiển vi',
          description:
            'A lens device revealing microbes, solving an enigma and advancing Science Spire research.',
        },
        {
          name: 'Rune Institute',
          nameBefore: '',
          description:
            'An institute researching rune applications, inspired by warriors’ trained Vital Force.',
        },
      ],
      character: [
        {
          name: 'James Carter',
          nameBefore: 'Giang Phàm',
          description:
            'Planetary Lord; accelerates time, supports Zethar’s Rune Institute, doubts Saurithar energy potential.',
          status: 'alive',
        },
        {
          name: 'Zethar',
          nameBefore: 'Khải',
          description:
            'King of Valtharion; founds Rune Institute, explores warrior rune secrets, seeks succession.',
          status: 'alive',
        },
      ],
    },
    {
      chapterIndex: 29,
      title: 'The Healer’s Rise',
      summaryDetail:
        'Chapter 29 . Zethar is old, so James to chose another chosen one to lead the country. Between dozen of prince and princess, it unveils James selecting Tharok—Zethar’s frail seventh son—via the Supreme Evolution System. Mentored by oracles, Tharok invents bandaging, antiseptics, and stitches at ten, saving legionaries. He pairs hemostatic moss with a sealing rune to clot wounds instantly, revolutionizing Valtharion’s healing. By fifteen, he founds the Flame Academy for medical and combat arts. Zethar, still alive, names him heir apparent, founding the Science Spire with James’ enigmas as its creed. Studying warriors, Zethar theorizes runes could be body-generated with energy, unaware Terra Nova’s low-tier Vital Force caps this—unlike Aquafluis potential James privately notes.',
      terminology: [
        {
          name: 'Flame Academy',
          nameBefore: 'Y Dược Học Viện',
          description:
            'Tharok’s institute for healing (bandaging, antiseptics) and combat rune advancements.',
        },
        {
          name: 'Sealing Rune',
          nameBefore: '',
          description:
            'A rune paired with hemostatic moss to clot wounds rapidly, invented by Tharok.',
        },
        {
          name: 'Hemostatic Moss',
          nameBefore: '',
          description:
            'A material that, with sealing runes, stops bleeding instantly, a medical breakthrough.',
        },
      ],
      character: [
        {
          name: 'James Carter',
          nameBefore: 'Giang Phàm',
          description:
            'Planetary Lord; selects Tharok, sees Aquafluis potential, doubts Saurithar rune evolution.',
          status: 'alive',
        },
        {
          name: 'Zethar',
          nameBefore: 'Khải',
          description:
            'King of Valtharion; names Tharok heir, founds Science Spire, studies warrior runes.',
          status: 'alive',
        },
        {
          name: 'Tharok',
          nameBefore: 'Hàn',
          description:
            'Zethar’s son; invents healing arts and sealing runes, founds Flame Academy, rises as heir.',
          status: 'alive',
        },
      ],
    },
  ],
  additional_terminology: [
    {
      name: 'Saurithar',
      nameBefore: 'Vũ quốc',
      description:
        'Terra Nova’s dominant species; Berserkers, Scribes, and Hybrids united under Valtharion, limited by low-tier Vital Force, lacking innate energy storage like warriors’ dantian.',
    },
    {
      name: 'Aquafluis',
      nameBefore: '',
      description:
        'Gelatinous beings from a water-world; their biology hints at potential for energy storage and rune generation, unlike Saurithar, though unconfirmed by James.',
    },
  ],
}

const magicWorldSurvivor = {
  id: '2',
  name: 'Chronicles of Rune Weavers',
  worldBuilding:
    'In a mana-drenched realm, power splits into two paths: Arcane High Mages and Iron Clad Warriors. Arcane High Mages, rare (1 in 10,000), wield advanced magic, sketching spell circles in thin air. Iron Clad Warriors, common (1-2 in 10), dominate with strength, though some harness mana as Lesser Rune Spellcasters, casting basic spells via rune paper or talismans—lacking the soul to match a Mage’s finesse. Here, no true Arcane High Mages appear, only Iron Clad Warriors and Lesser Rune Spellcasters scraping by. Runes, ancient magical symbols, evolved over time: Primal Wild Glyphs, raw marks on beasts, plants, and gems; Lone Power Sigils, potent but solitary; Linked Chain Runes, weaker yet chainable for complex effects; faint Binding Thread Sigils, useless alone but key to intricate spell arrays. Today, crafting blends Linked Chain Runes (basic effects) and Binding Thread Sigils (structural finesse), like coding—Linked as commands, Binding as syntax. The Omen Talisman, a rare talisman, unveils fortune or danger but caps at three crafts daily, lest misfortune strikes.',
  replaceList: [],
  link: `
    Original: https://grok.com/chat/5870a0fc-4f41-4d24-9afc-f681732d1a25
    New: https://grok.com/chat/f2d5a5bb-8f56-4468-9f3f-5ab01e3d8c79
  `,
  additionalNotes: `
    ### 1 : Rank of fluent in the system: Novice (Begineer) -> Skilled -> Mastery -> Advanced Mastery -> Expert -> Grandmaster
  `,

  chapters: [
    {
      chapterIndex: 1,
      title: 'Blizzard and Broken Hut',
      summaryDetail:
        'Cedric Ashen Hale, a 29-year-old programmer flung from modernity, wakes in a frail Lesser Rune Spellcaster’s body amid Frosthaven Hollow’s raging blizzard. Wrapped in rags, he hauls a sack of Mannac Dust Hardtack—dry bread laced with faint mana—and a near-empty vial of Eldritch Mana Ink, the wind cutting like knives. A rickety shack looms ahead: roof patched with holes, door groaning in the gale. Inside, he barely settles when Lyra Velvet Voss, a golden-haired temptress, knocks, offering a warm night for his bread. Cedric’s icy refusal meets her sly, eerie grin as she vanishes into the storm. He sparks a fire with soggy wood, simmering Mannac Dust Hardtack into mush to dull the cold. Rifling through the shack, he finds tattered hides, a rusty dagger dubbed Whispering Willow Thorn, and a tome: *Eight Talisman Rune Crafts*. Magnus Iron Rook, a gruff landlord, pounds the door, snatching Cedric’s 3 Mana Shard Crystal for safety-fee. A neighbor jabs at the body’s old gambling debts. By the flickering fire, Cedric grasps this world’s cruelty—safety trumps all, and his faint talisman-crafting memories might be his only shield.',
      terminology: [
        {
          name: 'Mannac Dust Hardtack',
          description:
            'Dry, mana-infused bread, tough enough to kill a dog if thrown, but sustains Lesser Rune Spellcasters weakly.',
          nameBefore: 'Linh Mễ',
          descriptionBefore: 'Spiritual rice infused with mana.',
        },
        {
          name: 'Whispering Willow Thorn',
          description: 'A rusty enchanted dagger, a crude tool from the shack’s prior tenant.',
          nameBefore: 'Liễu Diệp Tiêu',
          descriptionBefore: 'A rusted willow-leaf blade with minor magic.',
        },
        {
          name: 'Eldritch Mana Ink',
          description:
            'A mystical ink infused with mana, used to craft runes; its texture shifts with mana infusion.',
          nameBefore: 'arcane ink',
          descriptionBefore: 'A magical ink for talisman crafting.',
        },
        {
          name: 'Mana Shard Crystal',
          description:
            'A small, glowing crystal containing condensed mana, used as currency or power source.',
          nameBefore: 'mana-stone',
          descriptionBefore: 'A stone imbued with mana, used for transactions.',
        },
      ],
      character: [
        {
          name: 'Cedric Ashen Hale',
          description:
            'A programmer reborn as a struggling Lesser Rune Spellcaster, seeking survival through talisman craft.',
          nameBefore: 'Trần Huyền',
          descriptionBefore: 'A programmer in a low-tier cultivator’s body.',
          status: 'alive',
        },
        {
          name: 'Lyra Velvet Voss',
          description: 'A sly female Warrior with a dark edge, she leaves after a rejected trade.',
          nameBefore: 'Chu Tố',
          descriptionBefore: 'A seductive cultivator with hidden intent.',
          status: 'alive',
        },
        {
          name: 'Magnus Iron Rook',
          description: 'A harsh landlord who takes Cedric’s last Mana Shard Crystal.',
          nameBefore: 'Vương quản sự',
          descriptionBefore: 'A grumpy manager collecting rent.',
          status: 'alive',
        },
      ],
    },
    {
      chapterIndex: 2,
      title: 'First Craft Steps',
      summaryDetail:
        'Cedric Ashen Hale comforts himself that even as a novice Lesser Rune Spellcaster, he’s above mere mortals. He sorts his predecessor’s scraps: coins, *Eight Talisman Rune Crafts*, Whispering Willow Thorn, Eldritch Mana Ink, and old tools. Restless in the icy shack, he wonders why no wands aid his magic—then recalls this world’s Lesser Rune Spellcasters need materials like rune paper, their souls too weak to channel mana freely. In a dusty workshop, he tests a Gentle Cleansing Rune—not the comic-book kind that vaporizes trash, but a glyph with Binding Thread Sigils, stirring a faint breeze to sweep dust and grime into a pile, then fling it away (though useless against heavy filth or dung). The first try fails, Eldritch Mana Ink smudging; it shifts thickness with mana, not flat like normal ink. After failures, his fourth attempt glows, thanks to focus and instinct. A system pops up: [Rune Crafting Mastery +5 EXP]. It tracks his 98-year lifespan, rank, and skills, hinting at rune history—Primal Wild Glyphs to Binding Thread Sigils. Though mute, it sparks hope. By the fire, Cedric vows to wield this craft against the world’s dangers. (Explaination : Mana Ink is different from normal ink, depending on the mana injected, it will solidify or soften, so the actual rune talisman to a degree can be considered as having thickness/thinness without being purely 2-dimensional (find the right word).',
      terminology: [
        {
          name: 'Gentle Cleansing Rune',
          description:
            'A rune with Binding Thread Sigils, it conjures a light breeze to sweep light trash into a pile and toss it out—ineffective on heavy waste or dung.',
          nameBefore: 'Thanh Khiết Phù',
          descriptionBefore: 'A talisman to clear smoke and odors.',
        },
      ],
      character: [
        {
          name: 'Cedric Ashen Hale',
          description:
            'Masters the Gentle Cleansing Rune with a mysterious system, piecing together rune lore and his limits.',
          status: 'alive',
        },
      ],
    },
    {
      chapterIndex: 3,
      title: 'Whispers of Unknown Shadows',
      summaryDetail:
        'Mannac Dust Hardtack mush steams, cooked with potato and carrot, as Elias Dusky Wren, gaunt and grim, knocks with ale and boar jerky. By the fire, he whispers: Lord Gideon Grayson, one of Frosthaven Hollow’s three Arcane High Mages, vanished in the Wildwood Expanse, his fate a riddle. Cedric Ashen Hale probes about alchemy; Elias trades a flawed Dawn Mist Elixir scroll for 5 Mana Shard Crystals after a tense haggle. Alone, Cedric spots red light-threads raining from the sky—unseen by others, a sinister sign. To arm himself, he scans his predecessor’s tome and tries Swift Air Bullet, a basic Lesser Rune Spellcaster trick—mana fires an air blast stronger than a spark, no chants, low cost. At 10 meters it’s a breeze, 5 meters tears skin, 3 meters kills a hen; weaker than a blade but ranged. The system logs: [Swift Air Bullet: Novice], 5 EXP per shot. Each blast fans his hope amid dread. Night falls, and though omens chill him, Cedric clings to growing skill, the fire casting shadows on his set jaw.',
      terminology: [
        {
          name: 'Swift Air Bullet',
          description:
            'A basic Lesser Rune Spellcaster spell, slightly stronger than a fire spark, no chants needed, low mana cost. Weak at 10 meters, skin-tearing at 5, lethal to small game at 3.',
          nameBefore: 'Linh Lực Đạn Chỉ',
          descriptionBefore: 'A simple spiritual force projectile.',
        },
        {
          name: 'Dawn Mist Elixir',
          description: 'A partial recipe to boost mana reserves.',
          nameBefore: 'Sơ Nguyên Đan',
          descriptionBefore: 'A basic pill for cultivation.',
        },
      ],
      character: [
        {
          name: 'Cedric Ashen Hale',
          description:
            'Spots omens and trains Swift Air Bullet, bolstered by the system amid rising unease.',
          status: 'alive',
        },
        {
          name: 'Elias Dusky Wren',
          description:
            'A weary Lesser Rune Spellcaster with dire news, he sells a scroll and departs.',
          nameBefore: 'Triệu Phong',
          descriptionBefore: 'A tired cultivator sharing rumors.',
          status: 'alive',
        },
        {
          name: 'Lord Gideon Grayson',
          description: 'Frosthaven Hollow’s Arcane High Mage, lost in the Wildwood Expanse.',
          nameBefore: 'Trương gia chủ',
          descriptionBefore: 'A Trúc Cơ cultivator who vanished.',
          status: 'unknown',
        },
      ],
    },
    {
      chapterIndex: 4,
      title: 'The Tainted Lone Wanderer',
      summaryDetail:
        'Cedric Ashen Hale’s system reveals a 98-year lifespan from a weak vitality charm, thrilling him. He crafts Gentle Cleansing Runes all night, failing often but succeeding enough for 3 EXP each—progress crawling now. Worn out, he naps on a creaky cot until Old Tattered Thom, a ragged Iron Clad Warrior, bangs the door, pleading for a Banishment Sigil against self-born corruption. Cedric, unskilled, stalls till noon and denies a loan; Thom limps off. Fearing a plague, Cedric holes up, rattled by odd allies—Lyra Velvet Voss’s wiles, Thom’s ruin. The system hones his craft, not his fate. Days pass in routine: Mannac Dust Hardtack mush, fire naps, Swift Air Bullet drills (now piercing wood at 5 meters), and Omen Talisman practice—its faint glow warning of danger. With bread down to two meals, he knows hiding ends soon. By the embers, he dreams of peace but braces to sell runes outside, the world’s shadows pressing closer.',
      terminology: [
        {
          name: 'Banishment Sigil',
          description: 'A mid-tier talisman to repel corruption, tricky to craft.',
          nameBefore: 'Tịch Tà Phù',
          descriptionBefore: 'A talisman to dispel evil qi.',
        },
        {
          name: 'Omen Talisman',
          description: 'A rare talisman revealing fortune or peril, limited to three daily crafts.',
          nameBefore: 'Chỉ Lộ Phù',
          descriptionBefore: 'A talisman showing danger or fortune.',
        },
      ],
      character: [
        {
          name: 'Cedric Ashen Hale',
          description:
            'Hones runes and Swift Air Bullet in isolation, wary of corruption and odd neighbors.',
          status: 'alive',
        },
        {
          name: 'Old Tattered Thom',
          description: 'A tainted Iron Clad Warrior seeking aid, turned away for now.',
          nameBefore: 'Lão tu',
          descriptionBefore: 'A corrupted cultivator needing help.',
          status: 'alive',
        },
      ],
    },
    {
      chapterIndex: 5,
      title: 'Shadows Creep Ever In',
      summaryDetail:
        'Snow halts, and Elias Dusky Wren staggers to Cedric Ashen Hale’s shack, ashen: tainted Warrior are dying— only he and Cedric remain from their old crew from the last dungeon explore. Whispers blame a blight or relic beyond Frosthaven Hollow. Cedric fears his outsider roots might show (since, except for Elias, he is the only survivor), but Elias warns fleeing means death by beasts or storm. He treks to Longspire Stone Hold’s market, awed by a half-dragon-half-ostrict riding Iron Clad Warrior aloft. Streets gleam with white snow, sparse with passersby yet alive with laughter. Stalls hawk runes and trinkets amid snow-dusted bustle. At Scarred Jasper Jace’s stand, Cedric swaps Gentle Cleansing Runes for 2 Mana Shard Crystals, buying Eldritch Mana Ink and hides. Jace marvels at his quick skill; Cedric smirks, hiding the system. Home, he crafts a Mighty Force Rune after flops, earning 1 EXP. With Mannac Dust Hardtack nearly gone and doom creeping, he vows to hoard resources via his system, steeling himself as Swift Air Bullet drills echo in the shack, a faint shield against the dark.',
      terminology: [
        {
          name: 'Mighty Force Rune',
          description: 'A talisman boosting strength, harder to craft than basic runes.',
          nameBefore: 'Đại Lực Phù',
          descriptionBefore: 'A talisman enhancing physical power.',
        },
        {
          name: 'Longspire Stone Hold',
          description:
            'A Lesser Rune Spellcaster faction overseeing the market, nestled in a ravine.',
          nameBefore: 'Trường Sinh phái',
          descriptionBefore: 'A sect controlling the local area.',
        },
      ],
      character: [
        {
          name: 'Cedric Ashen Hale',
          description: 'Trades runes and gears up as corruption nears, relying on his system.',
          status: 'alive',
        },
        {
          name: 'Elias Dusky Wren',
          description: 'Warns of a lethal blight, urging Cedric to stay.',
          status: 'alive',
        },
        {
          name: 'Scarred Jasper Jace',
          description: 'A gruff merchant buying Cedric’s runes, noting his swift growth.',
          nameBefore: 'Trương Ma Tử',
          descriptionBefore: 'A scarred shopkeeper trading goods.',
          status: 'alive',
        },
      ],
    },
    {
      chapterIndex: 6,
      title: 'Offer and Steadfast Resolve',
      summaryDetail:
        'Days later, Cedric Ashen Hale returns to Longspire Stone Hold’s market, bearing two Mighty Force Runes. Scarred Jasper Jace buys them for 6 Mana Shard Crystals, then inquires about potion costs. Sensing Cedric’s hesitation, Jace growls: “Join Grayson Clan Forge as exclusive rune scribe. We supply materials, crystals, and master guidance.” He adds, “But swear a soul-binding oath, tied forever.” Cedric shakes his head, valuing freedom over mana-boosting elixirs. Jace warns: “Frosthaven Hollow’s chaos nears; lone casters won’t last.” Unmoved, Cedric buys more beast hides and departs into the biting wind. Snow thickens, streets empty, and no blight probes ease his nerves briefly. Over ten days, he hones Mighty Force Runes indoors, failing often but refining through focus. Each success nets 5 EXP; soon, the system shows [Mighty Force Rune: Advanced Novice]. Selling runes earns 15 Mana Shard Crystals, and Swift Air Bullet practice hits mastery, gaining 5 EXP per shot. Lacking potion ingredients, he studies Dawn Mist Elixir by the fire, resolve smoldering like embers against the howling storm outside.',
      terminology: [
        {
          name: 'Grayson Clan Forge',
          description:
            'A powerful Spellcaster family in Frosthaven Hollow, seeking skilled rune scribes.',
          nameBefore: 'Trương gia',
          descriptionBefore: 'A prominent cultivator family.',
        },
      ],
      character: [
        {
          name: 'Cedric Ashen Hale',
          description:
            'Rejects a binding offer, honing runes and skills to face looming threats alone.',
          status: 'alive',
        },
        {
          name: 'Scarred Jasper Jace',
          description: 'A merchant pushing Cedric to join his clan, impressed by his rune work.',
          status: 'alive',
        },
      ],
    },
    {
      chapterIndex: 7,
      title: 'Hidden Game Rules Unveiled',
      summaryDetail:
        'Late at night, Cedric Ashen Hale sits in his shack, firelight dancing on his sweat-streaked face. He fires Swift Air Bullet at a hanging boar chunk. After hours, from 25 meters, the blast pierces meat and wood, leaving a deep gouge. The system flashes: [Swift Air Bullet: Mastery], jumping 10 EXP at the new tier. Stunned, Cedric feels spell insights flood in—past confusions clarify, senses sharpens. The system’s true strength dawns: it unlocks deeper understanding with each milestone. He keeps firing, earning 5 EXP per shot until mana drains, sweat soaking him (After the level up, not only the strenth greatly increase, the mana used is also strongly reduced). Though his rank stalls, he mutters, “Strong skills are enough.” Meditating by the fire, he restores mana, aiming for a higher tier in the future, dreaming of safety. On his hard cot, sleep claims him, hope flickering amid this brutal world’s shadows.',
      terminology: [],
      character: [
        {
          name: 'Cedric Ashen Hale',
          description:
            'Unlocks the system’s hidden potential, mastering Swift Air Bullet with renewed hope.',
          status: 'alive',
        },
      ],
    },
    {
      chapterIndex: 10,
      title: 'Bane Ward Rune Triumph',
      summaryDetail:
        'Morning dawns; Lyra Velvet Voss knocks, bearing five pounds of dire beast meat, smirking: “Trade for Mighty Force Runes, Cedric?” He nods, takes the meat, and salts it. Mind on the blight, he tackles the Banishment Sigil—a mid-tier rune tough for his rank, craftable only at noon. For half a month, he studies, sketching hundreds of trials on parchment. At midday, sunlight cuts through snow; he lights incense, steadies his breath in a ritual calm. Nine attempts fail, hides charring with acrid smoke; the tenth falters too. Examining scraps, he spots the flaw: old Eldritch Mana Ink lacked potency. With fresh ink, his next try glows faintly after ten attempts. The system chimes: [Banishment Sigil: Novice], 10 EXP earned. Exhausted, Cedric slumps, sweat-soaked, eyeing snow beyond. He wraps the rune, set to sell it for resources, plotting his next step in this perilous realm.',
      terminology: [],
      character: [
        {
          name: 'Cedric Ashen Hale',
          description: 'Crafts a Banishment Sigil after grueling effort, readying for survival.',
          status: 'alive',
        },
        {
          name: 'Lyra Velvet Voss',
          description: 'Trades meat for runes, her sly charm unchanged.',
          status: 'alive',
        },
      ],
    },
    {
      chapterIndex: 11,
      title: 'First Steps Forward',
      summaryDetail:
        'Three days after crafting his Banishment Sigil, Cedric Ashen Hale uses a Omen Talisman to scan his rundown hamlet. The rune flares, a hazy glow unveiling red danger pulses across the slums. Once panicked, he’s now numb to unease, bolstered by relentless Swift Air Bullet drills—now at Expert tier. From 20 meters, it shatters boulders; at 50, it wounds deeply. Paired with pebbles or steel beads, its force doubles, striking like instinct. Confidence edges out caution, a flicker of pride igniting. At dawn, he heads to Longspire Stone Hold’s market, staking a busy crossroads spot. On a tattered cloth, he lays two Banishment Sigils, Gentle Cleansing Runes, and Omen Talismans. A young gray-robed caster buys a Banishment Sigil for 1 Mana Shard Crystal—his first sale thrills him quietly. By noon, he sells another Ward and a Seal, pocketing 2 more crystals. With scant funds, he buys rune materials, 10 pounds of Mannac Dust Hardtack, and a worn tome, *Blade Basics*, for 5 gold pounds from a jaded wanderer. Home, he cooks fragrant Hardtack, then swings Whispering Willow Thorn clumsily. The system tracks each strike, netting 5 EXP for Blade Basics, hitting Mastery by dusk. Sweaty but firm, he eyes the snowy sky, aiming for 100 Mana Shard Crystals before going to find freedom.',
      terminology: [
        {
          name: 'Blade Basics',
          description: 'A mundane sword manual for novices, adaptable with mana practice.',
          nameBefore: 'Trụ Cột Kiếm Pháp',
          descriptionBefore: 'A basic sword technique for mortals.',
        },
      ],
      character: [
        {
          name: 'Cedric Ashen Hale',
          description: 'Sells his first Banishment Sigil and trains swordplay, dreaming of escape.',
          status: 'alive',
        },
      ],
    },
    {
      chapterIndex: 12,
      title: 'Crimson Glow Intensifies',
      summaryDetail:
        'Late at night, Cedric Ashen Hale jolts awake as wind howls like a beast outside his shack. Peering out, he sees crimson threads—thicker now—weaving a grotesque web from sky to slum roofs. Heart pounding, he ignites a Omen Talisman. It burns fast, turning his vision monochrome, red danger dots flashing across the hamlet, peril closing in. He checks noon’s Banishment Sigils—18 tries, 2 successes—system logging 10 EXP, Rune Crafting Mastery at Skilled tier. He straps Wards to his belt, clutching Whispering Willow Thorn, braced for blight. By the fire, he recalls Elias Dusky Wren’s tales of Grayson Clan Forge and their lost lord. A hunch ties the glow to them, but his weak rank stalls pursuit. Snow pounds, wind shrieks like wraiths, unease gnawing. Yet survival flares stronger. Clutching a Ward, he stares into the dark, vowing to endure. At dawn, he learns from wanderers: Frosthaven Hollow, loosely ruled by Longspire Stone Hold, borders Wildwood Expanse—a beast-haunted resource trove. Mortals vanish here; only casters scrape by. Escape hardens in his mind amid this deadly frontier.',
      terminology: [],
      character: [
        {
          name: 'Cedric Ashen Hale',
          description: 'Faces intensifying blight signs, readying defenses with growing resolve.',
          status: 'alive',
        },
        {
          name: 'Elias Dusky Wren',
          description: 'His past warnings echo in Cedric’s mind, hinting at deeper mysteries.',
          status: 'alive',
        },
      ],
    },
    {
      chapterIndex: 13,
      title: 'Longevity Sparks Hope',
      summaryDetail:
        'A day later, Cedric Ashen Hale meets Magnus Iron Rook to pay rent—1 Mana Shard Crystal, as usual. Lyra Velvet Voss saunters up, eyes twinkling, teasing his toned frame and the body’s old gambling vice. He hands her a Warding Trinket Charm carved from old-wand wood; she blushes, swearing silence on his shift. Back home, he swings Whispering Willow Thorn in the snowy yard, cuts growing sharp as his caster physique mends fast. The system logs Blade Basics at 5 EXP per swing, while Eternal Vitality Art—his core practice—nears Mastery after steady meditation. At night, by the fire, he channels mana through Eternal Vitality Art. Warmth floods him; the system chimes: [Eternal Vitality Art: Mastery], 10 EXP surging at the breakthrough. His rank edges toward a higher tier, hope blooming. He calculates: three years to the next rank, 30 to a major leap, his 98-year lifespan a boon. By the flames, he counts runes—Banishment Sigils, Omen Talismans, Mighty Force Runes—vowing to craft and train harder, eyes now alight with purpose amid the frost.',
      terminology: [
        {
          name: 'Warding Trinket Charm',
          description: 'A small mana-wood carving to repel minor pests, a simple gift.',
          nameBefore: 'trâm khu trùng',
          descriptionBefore: 'A trinket to ward off insects.',
        },
        {
          name: 'Eternal Vitality Art',
          description: 'A core practice extending life and boosting resilience, slow but steady.',
          nameBefore: 'Trường Sinh Công',
          descriptionBefore: 'A longevity cultivation technique.',
        },
      ],
      character: [
        {
          name: 'Cedric Ashen Hale',
          description: 'Breaks through in Eternal Vitality Art, fueling his survival ambitions.',
          status: 'alive',
        },
        {
          name: 'Magnus Iron Rook',
          description: 'Collects rent with his usual gruff demeanor.',
          status: 'alive',
        },
        {
          name: 'Lyra Velvet Voss',
          description: 'Teases Cedric playfully, accepting his gift with a promise.',
          status: 'alive',
        },
      ],
    },
    {
      chapterIndex: 14,
      title: 'First Alchemy Attempt',
      summaryDetail:
        'After hoarding resources, Cedric Ashen Hale spends 10 Mana Shard Crystals on a small Iron Forge Cauldron and a few Ten Bloom Fruits, set to brew Dawn Mist Elixir per Elias Dusky Wren’s scroll. He stokes the cauldron’s fire; smoke chokes the shack, coughing racking him. Nine tries flop—three blasts scatter shards, one nearly slicing his arm. On the tenth, as flames steady, insight strikes; his hands tweak with newfound grace. A soft glow hums; two glossy Dawn Mist Elixirs drop. The system logs a new alchemy skill, mana faintly stirring within. Testing, he feeds one to a snow hare—it bounds with vigor, eyes bright. Swallowing the other, heat sears his veins, needle-sharp pain lancing through. Guiding it with Eternal Vitality Art, sweat pours; the system notes a rank nudge. Panting, he wipes his brow, eyeing the elixirs. Joy and grit surge: he must hasten growth against looming threats. Firelight bathes his resolute face, unyielding will burning bright.',
      terminology: [
        {
          name: 'Iron Forge Cauldron',
          description: 'A small, sturdy pot for brewing basic potions, prone to bursting.',
          nameBefore: 'lò luyện đan',
          descriptionBefore: 'A small alchemy furnace.',
        },
        {
          name: 'Ten Bloom Fruits',
          description: 'Mana-rich fruits, key for brewing basic elixirs like Dawn Mist.',
          nameBefore: 'Thập Hương Quả',
          descriptionBefore: 'A fragrant fruit for alchemy.',
        },
      ],
      character: [
        {
          name: 'Cedric Ashen Hale',
          description: 'Succeeds in brewing Dawn Mist Elixir, pushing his limits.',
          status: 'alive',
        },
        {
          name: 'Elias Dusky Wren',
          description: 'His scroll guides Cedric’s first alchemy triumph.',
          status: 'alive',
        },
      ],
    },
    {
      chapterIndex: 15,
      title: 'Strength Grows Steadily',
      summaryDetail:
        'Cedric Ashen Hale spends a snowy morning honing Swift Air Bullet in his yard. From 10 meters, a blast pulverizes a rock into dust, the system chiming: [Swift Air Bullet: Grandmaster], 10 EXP gained. Its power awes him; he grins, wiping sweat with a torn sleeve. Confident, he takes Mighty Force Runes and Banishment Sigils to Longspire Stone Hold’s market, selling steadily at his crossroads nook, earning 3 Mana Shard Crystals per trip—still far from his 100-crystal goal. Home, he cooks Mannac Dust Hardtack, its scent warming the shack. Eating by the fire, he feels vitality rise with each day’s training. Peering out, snow falls; crimson glow memories stir unease. He grips Whispering Willow Thorn, vowing to bolster his defenses. Lyra Velvet Voss strolls by, teasing, “Training to save the world, Cedric?” He smirks silently, resolve deepening. Wind bites outside, but his will burns fiercer, a flame against the creeping dark.',
      terminology: [],
      character: [
        {
          name: 'Cedric Ashen Hale',
          description: 'Masters Swift Air Bullet and sells runes, steeling himself for danger.',
          status: 'alive',
        },
        {
          name: 'Lyra Velvet Voss',
          description: 'Playfully mocks Cedric’s diligence, her intent unclear.',
          status: 'alive',
        },
      ],
    },
    {
      chapterIndex: 16,
      title: 'Wilderness Test Begins',
      summaryDetail:
        'Over ten days, Cedric Ashen Hale’s Blade Basics hits Mastery, honed by snowy yard swings—each strike earning 5 EXP. Swift Air Bullet steadies at Grandmaster, its power fearsome. He crafts two advanced runes—Swift Step Talisman and Iron Skin Ward—and ventures near Frosthaven Hollow’s outskirts to test them. Under a gray sky, he downs bugs and critters with Swift Air Bullet: at 50 meters, it pierces clean through, lethal and swift. Yet the area’s picked clean, no dire beasts lurk, leaving him underwhelmed. Eyeing Wildwood Expanse’s perils, he opts against deeper risks and turns back. Activating Swift Step Talisman, he glides like a sparrow, outpacing his norm. Nearby wanderers gape; he grins, unruffled. Back in his shack, heart racing from the jaunt, he savors the hunt’s freedom but dreads unseen threats. By the fire, he checks his rune stash, vowing better prep for future forays. Snow falls steady, yet a spark of confidence glows after this brief taste of the wild.',
      terminology: [
        {
          name: 'Swift Step Talisman',
          description: 'A high-tier rune boosting speed, making the user light and fleet-footed.',
          nameBefore: 'Khinh Thân Phù',
          descriptionBefore: 'A talisman enhancing agility.',
        },
        {
          name: 'Iron Skin Ward',
          description: 'A high-tier rune toughening the body against minor blows.',
          nameBefore: 'Phòng Thân Phù',
          descriptionBefore: 'A protective talisman.',
        },
      ],
      character: [
        {
          name: 'Cedric Ashen Hale',
          description: 'Tests new runes in the wild, gaining confidence but wary of greater risks.',
          status: 'alive',
        },
      ],
    },
    {
      chapterIndex: 17,
      title: 'Sudden Clash Erupts',
      summaryDetail:
        'At Longspire Stone Hold’s bustling market, Cedric Ashen Hale sells Banishment Sigils and Mighty Force Runes all day, netting 11 Mana Shard Crystals. As dusk falls, he packs up, but a gray-robed wanderer lunges, snatching his coin pouch. Cedric grabs the thief’s wrist, barking, “Give it back!” The man sneers, eyes glinting, and stabs with a short blade. Reflexes sharp, Cedric fires Swift Air Bullet from 3 meters—mana rips through, shredding the thief’s hand to gore. Screaming, the man flees, blood trailing. The pouch drops, revealing a sleek black lozenge—Gilded Serpent Fang. Heart pounding with fear and thrill, Cedric scoops it up and bolts through dark alleys home. By the fire, he tests the relic: it dances with mana, outclassing Whispering Willow Thorn in grace and might. Sweat beads, relief mixes with awe—he’s survived, and grown. The world’s brutality sinks in, but so does its promise, his gaze flickering with resolve.',
      terminology: [
        {
          name: 'Gilded Serpent Fang',
          description: 'A sleek, mana-charged relic, sharp and agile, surpassing basic blades.',
          nameBefore: 'Kim Yêu Đái',
          descriptionBefore: 'A black, magical lozenge weapon.',
        },
      ],
      character: [
        {
          name: 'Cedric Ashen Hale',
          description: 'Fends off a thief, gaining a powerful relic amid market chaos.',
          status: 'alive',
        },
      ],
    },
    {
      chapterIndex: 18,
      title: 'New Wealth Secured',
      summaryDetail:
        'In his shack, fire crackling, Cedric Ashen Hale examines Gilded Serpent Fang. Infusing mana, it slices a thick log in half with a swift arc, stunning him with its potency. Five days later, near a market ditch, he spots the thief’s severed hand, blackened and ignored by passing wanderers. Their cold indifference chills him—caution sharpens. He sells Whispering Willow Thorn at Longspire Stone Hold for 20 Mana Shard Crystals, a loss he shrugs off for fresh resources. Counting his hoard—35 Mana Shard Crystals and 50 Prime Mana Crystals from Lucius Silk Lorne’s deal—he feels a rush. That night, he channels a Prime Mana Crystal; rich mana floods his veins, nudging his rank up slightly. Gazing at Gilded Serpent Fang on the table, he smiles, sensing newfound strength to face perils. Snow piles outside, wind seeping through cracks, but hope warms him as his prospects grow.',
      terminology: [],
      character: [
        {
          name: 'Cedric Ashen Hale',
          description: 'Tests and trades gear, amassing wealth and power steadily.',
          status: 'alive',
        },
        {
          name: 'Lucius Silk Lorne',
          description: 'His past deal bolsters Cedric’s growing stash.',
          status: 'alive',
        },
      ],
    },
    {
      chapterIndex: 19,
      title: 'Blight Surge Unleashed',
      summaryDetail:
        'Late night, screams tear through the slums, jarring Cedric Ashen Hale awake. He flings open the door; a black blight tide surges in, felling two nearby wanderers—their eyes blank, breath gone. He triggers a Banishment Sigil instantly; golden light flares, repelling the miasma in a tight radius. It saves a trembling caster woman nearby, her gaze wild with terror. Above, crimson threads weave a vast web, choking Frosthaven Hollow’s sky. Cedric straps more Banishment Sigils to his belt, clutching Gilded Serpent Fang, dread icing his veins. Elias Dusky Wren stumbles up, pale and shouting, “Blight’s swept the town—dozens dead!” Cedric pulls him inside, stoking the fire high, resolve steady amid chaos. He suspects Grayson Clan Forge’s hand, but dares not probe further. Snow blends with blight outside, a nightmare vista, yet Cedric stands firm. Gripping his relic, he braces for the horrors ahead, survival his only creed.',
      terminology: [],
      character: [
        {
          name: 'Cedric Ashen Hale',
          description: 'Fights off blight with Banishment Sigils, steeling for worse to come.',
          status: 'alive',
        },
        {
          name: 'Elias Dusky Wren',
          description: 'Flees to Cedric, panicked by the town-wide blight outbreak.',
          status: 'alive',
        },
      ],
    },
    {
      chapterIndex: 20,
      title: 'Secrets Under Investigation',
      summaryDetail:
        'Morning breaks after the blight recedes, leaving dozens of wanderer corpses strewn across Frosthaven Hollow’s snow. Cloaked discreetly, Cedric Ashen Hale slips into Longspire Stone Hold’s market. A Omen Talisman guides him past lingering red danger zones amid the chaos. At a dingy tea stall, he huddles in a corner, overhearing two casters whisper: “Grayson Clan Forge held a forbidden rite in Wildwood Expanse—linked to this crimson glow.” Chills grip him, recalling Elias Dusky Wren’s tale of their lost lord. Pulse racing, he buys Eldritch Mana Ink and beast hides, then hurries home. In his shack, firelight dim, he crafts Banishment Sigils with care—successes push his skill to Advanced Mastery, netting 10 EXP. By the flames, he muses, “If Grayson Clan Forge sparked this blight, I must flee before it’s too late.” He tests Gilded Serpent Fang and fires Swift Air Bullet—5 EXP per shot—prepping for a risky probe. Snow pauses, air heavy; his resolve to escape hardens, eyes fierce in the quiet dark.',
      terminology: [],
      character: [
        {
          name: 'Cedric Ashen Hale',
          description: 'Probes rumors of blight’s source, readying to flee Frosthaven Hollow.',
          status: 'alive',
        },
        {
          name: 'Elias Dusky Wren',
          description: 'His old tales fuel Cedric’s suspicions of Grayson Clan Forge.',
          status: 'alive',
        },
      ],
    },
    {
      chapterIndex: 21,
      title: 'Trapped in Peril',
      summaryDetail:
        'Stifled by Frosthaven Hollow’s dread, Cedric Ashen Hale resolves to flee. He joins thirty wanderers, packs light, trudging through thick snow past the town gate. Wind bites, silence reigns save for crunching steps. Miles out, in a barren clearing, half the group collapses—groans fade as blood seeps from eyes and ears, staining snow red. They still in moments. Panic erupts; screams pierce the air as survivors bolt back to town, abandoning the dead. Cedric freezes, heart hammering, struck by a grim truth: escape is barred. An unseen force—barrier, curse, or worse—chains them to Frosthaven Hollow. He staggers home, mind leaden. By the crackling fire, his gaze hardens. If flight fails, survival demands grit. The shack’s walls creak under snow’s weight, but his will steadies—ready to endure this inescapable cage of danger.',
      terminology: [],
      character: [
        {
          name: 'Cedric Ashen Hale',
          description: 'Faces a failed escape, vowing to survive within Frosthaven Hollow’s trap.',
          status: 'alive',
        },
      ],
    },
    {
      chapterIndex: 22,
      title: 'Whispers of Trouble',
      summaryDetail:
        "In his rickety shack, Cedric Ashen Hale scratches on worn parchment: 'Torn cloak, need new one; thin blanket, soap too; boots frayed, spares required.' He pauses, adding, 'Iron Skin Ward, Swift Step Talisman'—vital runes for this harsh realm. He mutters, “Even unused, they’ll fetch Mana Shard Crystals—extra armor for my life.” Three sharp knocks jolt him: 'Thud! Thud! Thud!' Unlike Elias Dusky Wren or Lyra Velvet Voss, they’re foreign. Wary, he hides crystals under floorboards, calling, “Who’s there?” A clear voice replies, “I’m Mara Dawn Quill, new neighbor, greeting you.” Cracking the door, he sees a red-robed caster, mid-twenties, sharp brows, starry eyes—cool yet faintly warm with a smile. After brief words, she offers a Vital Breath Elixir vial, then leaves. Cedric weighs it, grumbling, “Ten Mana Shard Crystals’ worth—generous! But she’s no mere wanderer. Why settle here amid blight?” Distrust wins; he’ll sell it tomorrow at market. In this world, sudden kindness hides fangs.",
      terminology: [
        {
          name: 'Vital Breath Elixir',
          description: 'A potion boosting vitality, costly and potent, suspect in origin.',
          nameBefore: 'Bổ Khí Đan',
          descriptionBefore: 'A pill to replenish qi.',
        },
      ],
      character: [
        {
          name: 'Cedric Ashen Hale',
          description: 'Lists needs and meets a dubious neighbor, wary of her gift.',
          status: 'alive',
        },
        {
          name: 'Mara Dawn Quill',
          description: 'A sharp, mysterious new neighbor bearing an unexpected offering.',
          nameBefore: 'Triệu Uyển Quân',
          descriptionBefore: 'A new neighbor with unclear intent.',
          status: 'alive',
        },
        {
          name: 'Elias Dusky Wren',
          description: 'His familiar knock differs from the stranger’s.',
          status: 'alive',
        },
        {
          name: 'Lyra Velvet Voss',
          description: 'Her usual tap ruled out by the odd rhythm.',
          status: 'alive',
        },
      ],
    },
    {
      chapterIndex: 23,
      title: 'Bolstering Defenses Swiftly',
      summaryDetail:
        'Next dawn, Cedric Ashen Hale sells Mara Dawn Quill’s Vital Breath Elixir at Longspire Stone Hold for 8 Mana Shard Crystals. He buys Eldritch Mana Ink, beast hides, and 10 pounds of Mannac Dust Hardtack to stockpile. Back home, he trains relentlessly. In the snowy yard, Swift Air Bullet blasts through thick planks at 5 meters—system noting 5 EXP, nearing Grandmaster Advanced. Crafting Mighty Force Runes and Banishment Sigils, his 50% success rate nets 20 Mana Shard Crystals from sales. Gilded Serpent Fang slices logs like butter, Blade Basics jumping 10 EXP to Mastery. The slums buzz with new faces, tension thickening. Visiting Elias Dusky Wren with Omen Talismans as gifts, Elias warns, “These aren’t wanderers—sects sent them. Longspire Stone Hold’s elder faces doom.” Cedar asks, “Affects us?” Elias smirks, “Stay clear of the mess, we’re fine.” Home, unease weighs; Cedric doubles down on strength, prepping for lurking threats.',
      terminology: [],
      character: [
        {
          name: 'Cedric Ashen Hale',
          description: 'Sells a gift, trains hard, and braces for sect-driven unrest.',
          status: 'alive',
        },
        {
          name: 'Mara Dawn Quill',
          description: 'Her elixir becomes Cedric’s profit, her motives still murky.',
          status: 'alive',
        },
        {
          name: 'Elias Dusky Wren',
          description: 'Hints at sect turmoil, advising Cedric to steer clear.',
          status: 'alive',
        },
      ],
    },
    {
      chapterIndex: 24,
      title: 'Wilderness Strength Trial',
      summaryDetail:
        'Lacking battle scars, Cedric Ashen Hale seeks Wildwood Expanse to temper himself. Trusting only Elias Dusky Wren—who’s tied up—he goes solo at dawn. Armed with Gilded Serpent Fang, a rune pouch, and a new 20-pound Iron Forge Blade—unrefined but hefty—he treks into the woods. Sparse trees thicken, air turns damp and cold. A shrieking rat-beast—cat-sized, ear-piercing—charges from brush. Swift Air Bullet drills through it, blood spraying as it drops. Deeper in, he fells giant bugs and small game, Blade Basics climbing 10 EXP to Advanced Mastery. Halting at the forest’s edge, he avoids greater risks and heads back. Along a stream, washerwomen jest, “Eyeing us, hero? Pick one!” Flushed, he hurries off, relieved by the short trip. By his fire, he vows, “Must grow stronger—no relying on luck or others.” Snow dusts the night, his resolve firm.',
      terminology: [
        {
          name: 'Iron Forge Blade',
          description: 'A heavy, unrefined sword, sturdier than Whispering Willow Thorn.',
          nameBefore: 'thanh kiếm mới',
          descriptionBefore: 'A new sword from the market.',
        },
      ],
      character: [
        {
          name: 'Cedric Ashen Hale',
          description: 'Hones skills in Wildwood Expanse, growing bolder yet cautious.',
          status: 'alive',
        },
        {
          name: 'Elias Dusky Wren',
          description: 'Too busy to join, leaving Cedric to venture alone.',
          status: 'alive',
        },
      ],
    },
    {
      chapterIndex: 25,
      title: 'Calm Shatters Abruptly',
      summaryDetail:
        'Six days later, a thunderclap jolts Cedric Ashen Hale from sleep. He flings open his door—Frosthaven Hollow’s slums erupt in chaos. Dozens of wanderers sprint toward Longspire Stone Hold’s market, eyes blazing with greed, as if treasure beckons. Crimson glow blankets Green River Hold—Longspire Stone Hold’s core base. Elias Dusky Wren barrels in, pale, yelling, “Longspire Stone Hold’s life-stealing rites exposed—sects allied to strike!” Cedric stashes Mana Shard Crystals in a hidden nook, grabs Gilded Serpent Fang and rune pouch, and bolts against the tide into Wildwood Expanse. Lyra Velvet Voss shouts, “Are you mad, fleeing where?” He ignores her, heart pounding, survival aflame. Behind, market screams and clashing steel echo. Snow thickens, wind bites, but his will burns. Suddenly, red beams streak south into Wildwood Expanse, chased by glowing skyships—explosions shake the earth. Cedric freezes, mind racing: “Blood rites? Those crimson threads I saw?” He considers shifting course, but opts to press on cautiously. (the destruction is just a small branch of Longspire Stone Hold)',
      terminology: [
        {
          name: 'Green River Hold',
          description: 'Longspire Stone Hold’s central stronghold, now under siege.',
          nameBefore: 'Lục Hà phường',
          descriptionBefore: 'Main base of Trường Sinh Tông in the region.',
        },
      ],
      character: [
        {
          name: 'Cedric Ashen Hale',
          description: 'Flees chaos into Wildwood Expanse, piecing together crimson clues.',
          status: 'alive',
        },
        {
          name: 'Elias Dusky Wren',
          description: 'Warns of Longspire Stone Hold’s downfall, frantic and shaken.',
          status: 'alive',
        },
        {
          name: 'Lyra Velvet Voss',
          description: 'Calls after Cedric, baffled by his wild escape.',
          status: 'alive',
        },
      ],
    },
    {
      chapterIndex: 26,
      title: 'Beast Possession Ambush',
      summaryDetail:
        'Cedric Ashen Hale dashes ten miles into Wildwood Expanse—sparse trees, overgrown weeds, market blasts fading. Exhausted, he ducks into brush, catching breath, then pauses. His instincts scream: with crimson beams arcing here, why run so far? Three or four miles should’ve sufficed. He realize he may have been affect by some kind of sense manipulating spell? A low growl rumbles; a ten-foot dire beast charges—eyes red, a twisted human face on its brow snarling, “Your body… mine!” A Longspire Stone Hold caster, soul-fused to escape, lured him here. Cedric unleashes Gilded Serpent Fang—it slashes a leg—but the beast lunges, claws raking air. Swift Air Bullet pierces its gut at 5 meters, black blood spurting, yet entrails slither back, flesh knits. It dodges blasts, mocking, “Surrender your shell—I’ll raise you high!” Cedric snaps, “Dog shit!” Focus surges; past-life gun drills flash. Cedric Ashen Hale continuously used Spiritual Energy bullets, the ferocious beast laughed and continued to dodge. Accidentally being hit by bullets will only automatically restore. It convinced Cedric Ashen Hale to give it his body, and in return, it trained Cedric Ashen Hale to a very high level. Cedric Ashen Hale cursed "dog shit", suddenly, he felt like he had never been able to concentrate, his hand involuntarily condensed the Air Bullet, but his mind kept replaying a scene in his previous life holding a gun to practice. mana flares—four Swift Air Bullets roar like gunfire. Three hit, shredding deeper than ever. He severs its neck with Gilded Serpent Fang; the head rolls, face dead. Panting, he mutters, “Rotten luck!”',
      terminology: [],
      character: [
        {
          name: 'Cedric Ashen Hale',
          description: 'Slays a possessed beast, unnerved by its trap and power.',
          status: 'alive',
        },
      ],
    },
    // thay đổi mô tả cảnh quỷ dị khi quản sự vs con thú
    {
      chapterIndex: 27,
      title: 'Unexpected Bounty Gained',
      summaryDetail:
        'Cedric Ashen Hale stands over the beast’s reeking corpse, black blood fouling the air. No rune or potion loot disappoints him, but he hefts it anyway, thinking, “Dire beast—worth some Mana Shard Crystals.” Its bulk slows him through Wildwood Expanse as dawn pales the sky. Back at Frosthaven Hollow’s slums, chaos lingers—wanderer bodies rot, blood thick. At Longspire Stone Hold’s market, now held by Forge Gear Sect, he drops the carcass at a makeshift stall. A gray-robed steward, sharp-eyed, inspects it. Cedric explains, “Attacked me—human face, likely a failed possession.” The steward’s gaze sparks: “A Longspire Stone Hold fugitive, wanted dead. Fifty Mana Shard Crystals reward!” Cedric blinks, stunned by fortune. Taking the heavy pouch, he probes, “What’s the state now?” The steward drones, “Longspire Stone Hold’s crushed, but rogue casters roam—dangerous. Leaving needs a high-rank escort, or it’s death.” Cedric nods, relieved he stayed close, pocketing his windfall with grim glee.' +
        `Gray Shirt Administrator's Perspective: After Cedric Ashen Hale left, the gray-shirted manager ordered two disciples to carry the beast's body into a closed room at the back of the hall. Under the dim light, he struggled to piece together the broken pieces of the animal's carcass, his hands constantly moving, Suddenly, the ferocious beast's eyes opened, a strange smile appeared on his deformed face, and a hoarse voice rang out: "This will be fun." The manager raised his head, the corner of his lips curled up into a meaningful smile, his eyes flashed with excitement: "Yes, very happy." He nodded repeatedly, as if participating in a mysterious game that only he understood.
        
        Hearing this, the disciple standing nearby trembled with fear, his head full of confusion.

        After finishing, the steward turned to ask a disciple standing nearby: “What is the name of the brat who handed over the beast’s body?” The disciple replied: “He calls himself Cedric Ashen Hale, a loose spellcaster in the tent area.” The ferocious beast walked out, curled its lips, and said disdainfully: “Don’t worry about it, he’s just a brat with some magical talent.”

        After finishing, the steward waved his hand and ordered the disciple to leave. The disciple sighed at surviving the accident, thinking that he would be silenced. He walked away, thinking about contacting his superiors in the sect to describe today’s scene, when he suddenly felt his thinking becoming more and more sluggish, his mind filled with fear. 30 seconds later, he was full of life again, forgetting everything that had just happened. (If Cedric Ashen Hale were here, he would see a red string falling from the sky, piercing this disciple’s head)`,
      terminology: [
        {
          name: 'Forge Gear Sect',
          description: 'A mechanized sect seizing control after Longspire Stone Hold’s fall.',
          nameBefore: 'Khí Vật Môn',
          descriptionBefore: 'A sect known for artifacts and tools.',
        },
      ],
      character: [
        {
          name: 'Cedric Ashen Hale',
          description: 'Turns a beast’s corpse into unexpected riches, wary of rogue threats.',
          status: 'alive',
        },
      ],
    },
    {
      chapterIndex: 28.1,
      title: 'Magical Talent Unveiled',
      summaryDetail:
        'Cedric Ashen Hale reflects on his fight with the possessed beast—Swift Air Bullet felt strange, akin to bullets from his past life, surging from within. The system lists [Manifest Shot: 1/1000 EXP], far exceeding typical skills (100-200 EXP). Asking locals proves futile; old tomes offer no clues. He heads to Forge Gear Sect’s archive hall, consulting a stern scribe, Owen Slate Quill, who explains magic as soul, mana, and formula intertwined. The scribe reveals Warriors’ souls lack vitality, Spellcasters’ are stiff, while Mages wield flexible, soul-driven power—adjusting mana freely. Some Mages shape raw spells, though costly, and rare Spellcasters awaken talents in mortal peril. Through detailed dialogue (to be expanded - note: Cedric pay to be taught, and he hides the information of the full detail (firing bullet), just say brief description - the beast fighting is no need to hide, his neighbor also know it), Cedric confirms his’s gift—unlocked by danger—marks him beyond rigid runes, hinting at vast potential. Cedric leaves, ignited by his newfound magical talent. Owen also said technically, all Spellcaster have to potential to become a Mage, but very few unlock the potential, let alone becoming a Mage.',
    },
    {
      chapterIndex: 28,
      title: 'New Order Rises',
      summaryDetail:
        'Longspire Stone Hold’s market steadies under Forge Gear Sect’s iron grip—crimson threads vanish, blight cleansed by arrays. Cedric Ashen Hale watches from a corner as metal golems stomp, repairing walls with clanging precision. He marvels, “Forge Gear Sect’s craft outshines runes or spells—raw power.” With 50 Mana Shard Crystals, he buys beast hides and a Wind Stride Technique scroll for 20 crystals, aiming to boost evasion. In his shack, he crafts Banishment Sigils under flickering firelight—system ticking Mastery at 80/200. Testing Wind Stride Technique, he glides across the snowy yard—system logging Novice at 5/100. Lyra Velvet Voss knocks, smirking, “Survived, huh? Bold move!” Cedric shrugs, “Luck, mostly.” She adds, “Elias Dusky Wren vanished in the chaos—likely gone.” He nods, heavy-hearted but masked. Escape gnaws at him—Frosthaven Hollow’s a mire, the outer world a lethal unknown. Crimson beams haunt his mind, steeling his resolve to grow stronger against future shadows.',
      terminology: [
        {
          name: 'Wind Stride Technique',
          description: 'A scroll teaching swift movement, ideal for fleeing danger.',
          nameBefore: 'Phong Hành Thuật',
          descriptionBefore: 'A wind-based movement technique.',
        },
      ],
      character: [
        {
          name: 'Cedric Ashen Hale',
          description: 'Adapts to new rule, training for escape amid loss.',
          status: 'alive',
        },
        {
          name: 'Lyra Velvet Voss',
          description: 'Teases Cedric, bearing grim news of Elias.',
          status: 'alive',
        },
        {
          name: 'Elias Dusky Wren',
          description: 'Missing, presumed dead in the night’s turmoil.',
          status: 'unknown',
        },
      ],
    },
    {
      chapterIndex: 28.1,
      title: 'Magical Talent',
      summaryDetail: 'Phát hiện bản thân có ma pháp thiên phú + giới thiệu định nghĩa ma pháp.',
    },

    {
      chapterIndex: 29,
      title: 'Blade Skill Ascends',
      summaryDetail:
        'Three months pass; Cedric Ashen Hale trains relentlessly in his snowy yard. Sweat streams, muscles ache, but he swings Gilded Serpent Fang in sharp arcs—system jumping from Mastery 399/400 to Expert 0/800. A strange clarity floods him—he senses every fiber, every vein, controlling them like breath. “Inner sight?” he gasps, checking the system: lifespan rises from 41/99 to 42/99. Elated, he grins, “Swordplay boosts life too?” Sipping diluted brine, relief washes over him. Mara Dawn Quill, now in Forge Gear Sect robes, strolls by, winking, “Leisurely, eh?” Cedric smirks awkwardly, silent. Frosthaven Hollow’s slums hum under new rule, yet rogue Longspire Stone Hold casters lurk. By the fire, he vows, “Must prep to leave—this place isn’t safe.” His blade gleams, a promise of strength against the creeping dark.',
      terminology: [],
      character: [
        {
          name: 'Cedric Ashen Hale',
          description: 'Masters Gilded Serpent Fang, gaining life and resolve.',
          status: 'alive',
        },
        {
          name: 'Mara Dawn Quill',
          description: 'Now sect-clad, she jests at Cedric’s training.',
          status: 'alive',
        },
      ],
    },
    {
      chapterIndex: 30,
      title: 'Odd Neighbor Arrives',
      summaryDetail:
        'Next morning, Cedric Ashen Hale spots a new tenant in Mara Dawn Quill’s old shack—Giles Stout Brew, a plump, fiftyish wanderer with a kindly grin. Giles knocks, offering a Lumin Essence, chuckling, “I have been brewing these for thirty years brewing—this strengthens… vitality!” Cedric blushes, declines, but takes it, stashing it away, muttering, “Too odd—keepsake only.” Giles shares, “Fled another market; cost me 3 Prime Mana Crystals with a caravan.” Cedric asks, “Leaving here?” Giles replies, “Five Prime Mana Crystals, plus a high-rank guide—or death awaits.” Cedric sighs—40 Mana Shard Crystals fall short. Giles crafts day and night, popping Fae’s Delight to stay sharp; Cedric shakes his head, “He’ll burn out.” The slums stir with strange rhythms, but Giles’ cheer jars against the gloom. (Both types of potions can strengthen the body to some extent, provide necessary nutrients, enhance body functions, but also provide effects similar to drugs.)',
      terminology: [
        {
          name: 'Lumin Essence',
          description:
            'A potent brew for stamina, awkwardly personal in purpose (can strengthen the body to some extent, provide necessary nutrients, enhance body functions, but also provide effects similar to drugs.)',
          nameBefore: 'Chúng Diệu Đan',
          descriptionBefore: 'A pill for vigor and vitality.',
        },
        {
          name: 'Fae’s Delight',
          description:
            'Elixirs to stave off fatigue, risky in excess. (can strengthen the body to some extent, provide necessary nutrients, enhance body functions, but also provide effects similar to drugs.)',
          nameBefore: 'Thăng Tiên Đan',
          descriptionBefore: 'Pills to boost alertness.',
        },
      ],
      character: [
        {
          name: 'Cedric Ashen Hale',
          description: 'Meets an eccentric neighbor, weighing escape costs.',
          status: 'alive',
        },
        {
          name: 'Giles Stout Brew',
          description: 'A jovial alchemist with bold brews and tales.',
          nameBefore: 'Lâm Quý',
          descriptionBefore: 'An older alchemist neighbor.',
        },
        {
          name: 'Mara Dawn Quill',
          description: 'Her old home now houses Giles Stout Brew.',
          status: 'alive',
        },
      ],
    },
    {
      chapterIndex: 31,
      title: 'Future Plans Forged',
      summaryDetail:
        'Cedric Ashen Hale watches Giles Stout Brew hawk potions at a small stall, mind churning escape plans. Five Prime Mana Crystals—500 Mana Shard Crystals—loom beyond his 40-crystal stash and rune stock. In the yard, he drills Wind Stride Technique—feet blur across snow, system at Novice 20/100. Lyra Velvet Voss passes, lugging a washbasin, teasing, “Still kicking? New neighbor any good?” Cedric quips, “Makes vigor brews—not my taste.” Recalling the market’s bloodbath, he resolves, “Need more crystals, rank up, join a high-rank caravan.” Inside, system shows rank at 10/200. He commits to selling runes and hunting, amassing wealth for the perilous trek ahead. By the fire, his gaze hardens—not the scared newcomer, but a caster ready to defy this world’s trials.',
      terminology: [],
      character: [
        {
          name: 'Cedric Ashen Hale',
          description: 'Plots escape, training and hoarding for survival.',
          status: 'alive',
        },
        {
          name: 'Giles Stout Brew',
          description: 'Busies himself with alchemy, a quirky fixture nearby.',
          status: 'alive',
        },
        {
          name: 'Lyra Velvet Voss',
          description: 'Jests at Cedric, a familiar face in the slums.',
          status: 'alive',
        },
      ],
    },
    {
      chapterIndex: 24,
      title: 'Wilderness Retreat Begins',
      summaryDetail:
        'At dawn, Cedric Ashen Hale rises in his Frosthaven Hollow shack, washing with murky water from a cracked jar. His reflection shows a healthier glow—skin no longer sallow, eyes now resolute, less sly. Chuckling, he muses a 35-year-old claim might stick. He gears up: Gilded Serpent Fang at his hip, Dark Bane Wards, Iron Skin Wards, Swift Step Wards tied close, dried meat and water in a torn sack. Seeking respite post-Longspire Stone Hold’s fall, he steps into autumn winds, the slums eerily quiet. A Mystic Oracle Seal paints the world monochrome—all paths safe. Into Wildwood Expanse, he hones Swift Air Bullet on bugs—sparing flies, blasting bigger pests—each shot netting 5 EXP. Near noon, a blast snaps a tree at 50 meters; system chimes [Grandmaster: 1/3200]. (Mentioned he tried to use Manifest Shot but take too long, have to imagine firing a gun for 30 seconds to take the correct feeling (if in danger, 1-2 second might be enough, but he didnt want to risk), then shot, then have to rest for 15 minutes. Estimated in 2 months will upgrade to) Sighing at slow gains, he nods to three herb-picking wanderers. Evening, he finds Giles Stout Brew beaten by four female casters over toxic Dawn Rise Pills. Mediating, he suggests compensation, disperses the crowd, hoping Giles curbs his recklessness.',
      terminology: [],
      character: [
        {
          name: 'Cedric Ashen Hale',
          description: 'Seeks relaxation in Wildwood Expanse, refining skills and aiding Giles.',
          nameBefore: 'Trần Huyền',
          descriptionBefore: 'Protagonist adapting to a harsh world.',
          status: 'alive',
        },
        {
          name: 'Giles Stout Brew',
          description: 'Beaten for selling harmful Dawn Rise Pills, urged to compensate.',
          nameBefore: 'Lâm Quý',
          descriptionBefore: 'An alchemist neighbor with risky habits.',
          status: 'alive',
        },
      ],
    },
    {
      chapterIndex: 25,
      title: 'Mastering Thunder Roar',
      summaryDetail:
        "At dusk, Cedric Ashen Hale eats Mannac Dust Hardtack in his shack when Giles Stout Brew, bruised and swollen, stumbles in, lamenting a 400 Mana Shard Crystal payout to wronged female casters. He defends Dawn Rise Pills’ demand; Cedric advises quitting, but Giles clings to profit, earning a weary headshake. By the fire, Cedric studies a market tome, tackling Thunder Roar—a soul-shaking spell potent against blight. Gut-driven chants falter—hoarse ‘Roars’ lack force after dozens of tries. Frustrated, he bangs on Giles’ herb-strewn shack at midnight. Half-asleep, Giles coaches belly-voiced projection. After thirty minutes, Cedric bellows, 'Begone!'—air trembles, toppling Giles and his chair. System logs [Novice: 1/100]. Apologizing profusely, he helps Giles up, thrilled by a new survival tool. Back home, he vows to refine it against Frosthaven Hollow’s looming chaos and blight threats.",
      terminology: [
        {
          name: 'Thunder Roar',
          description: 'A soul-based spell inducing fear, effective against dark entities.',
          nameBefore: 'Quát Lớn Thuật',
          descriptionBefore: 'A loud shout technique to intimidate foes.',
        },
      ],
      character: [
        {
          name: 'Cedric Ashen Hale',
          description: 'Learns Thunder Roar with Giles’ aid, bolstering defenses.',
          status: 'alive',
        },
        {
          name: 'Giles Stout Brew',
          description: 'Bruised but unrepentant, teaches Cedric vocal technique.',
          status: 'alive',
        },
      ],
    },
    {
      chapterIndex: 26,
      title: 'Neighbors Band Together',
      summaryDetail:
        'Cedric Ashen Hale drills Thunder Roar in his snowy yard for days, chants softening to silent tremors—5 EXP per session. Three casts dizzy him, forcing rest. Lyra Velvet Voss warns of unrest; Forge Gear Sect’s withdrawal and Longspire Stone Hold’s collapse—both elders fallen—stir tension. Giles Stout Brew rallies neighbors for mutual aid. At Giles’ herb-choked shack, Cedric meets Silas Warm Hearth, a mild elder; cold duo Felix Nine Forge and Iris Frost Veil; Lyra; and Victor Keen Edge, an ambitious late-rank caster. Victor pushes night patrols, splitting groups, swiftly taking charge. Cedric marvels silently at power rising in chaos, opting to observe. Back home, system shows rank at 20/200. He trains Wind Stride Scroll and Gilded Serpent Fang, steeling for turbulent days. Snow thickens outside, but his survival flame blazes hotter.',
      terminology: [],
      character: [
        {
          name: 'Cedric Ashen Hale',
          description: 'Refines Thunder Roar, joins neighbors, preps for unrest.',
          status: 'alive',
        },
        {
          name: 'Giles Stout Brew',
          description: 'Proposes neighborly alliance amid growing chaos.',
          status: 'alive',
        },
        {
          name: 'Lyra Velvet Voss',
          description: 'Warns Cedric of instability, joins the gathering.',
          status: 'alive',
        },
        {
          name: 'Silas Warm Hearth',
          description: 'A gentle elder among the neighbors.',
          nameBefore: 'Ôn Vũ Tuyền',
          descriptionBefore: 'A mild-mannered old cultivator.',
          status: 'alive',
        },
        {
          name: 'Felix Nine Forge',
          description: 'Cold and distant, part of a reserved pair.',
          nameBefore: 'Phương Cửu Đường',
          descriptionBefore: 'A detached cultivator.',
          status: 'alive',
        },
        {
          name: 'Iris Frost Veil',
          description: 'Aloof, paired with Felix Nine Forge.',
          nameBefore: 'Dương Băng Chi',
          descriptionBefore: 'A reserved female cultivator.',
          status: 'alive',
        },
        {
          name: 'Victor Keen Edge',
          description: 'Late-rank caster seizing control of the group.',
          nameBefore: 'Kiều Quan Nguyên',
          descriptionBefore: 'An ambitious late-stage cultivator.',
          status: 'alive',
        },
      ],
    },
    {
      chapterIndex: 27,
      title: 'First Blood Spilled',
      summaryDetail:
        'Victor Keen Edge leads ten mid-rank casters on night patrols, split in shifts. Cedric Ashen Hale stays in, fire crackling, when combat erupts nearby. He rushes out, Gilded Serpent Fang drawn, runes primed. Under dim moonlight, three masked casters ambush a patrol—two already bleed out on snow. Cedric fires Swift Air Bullet thrice: first shatters a shield, second pierces a chest, third blasts a head apart. The others fall fast, blood spraying. Survivors gape, awestruck. Shaking from his first kills, Cedric steadies himself, demanding, “Convert loot to Mana Shard Crystals for me.” They nod hastily. Back by the fire, hands trembling, blood haunts him. He mutters, “Kill or be killed—I must adapt.” System awards 10 EXP to Swift Air Bullet, but joy eludes him—only dread for the bloody path ahead weighs his heart.',
      terminology: [],
      character: [
        {
          name: 'Cedric Ashen Hale',
          description: 'Kills for the first time, shaken but resolute.',
          status: 'alive',
        },
        {
          name: 'Victor Keen Edge',
          description: 'Organizes patrols, indirectly sparking Cedric’s fight.',
          status: 'alive',
        },
      ],
    },
    {
      chapterIndex: 28,
      title: 'Embracing Harsh Reality',
      summaryDetail:
        'Before Cedric Ashen Hale rests, screams echo again. He dashes out—masked caster with a mana shield assails another patrol. Activating Iron Skin Ward, he silently casts Thunder Roar, then unleashes Swift Air Bullet like rain. The roar staggers the foe, shield cracks, legs sever, head explodes under the final shot. Four invaders die; two patrol casters perish. Survivors whisper of his terrifying power. Panting, he claims Mana Shard Crystals, retreating home. By the fire, hands quake—blood and cries sear his mind. He murmurs, “This world turns men to monsters—I’m one now.” First kills unnerve him, yet he accepts his integration into this brutal realm. System logs Thunder Roar at 10/100, but survival trumps stats. Snow pauses outside, his heart chills, resolve his sole anchor in the chaos.',
      terminology: [],
      character: [
        {
          name: 'Cedric Ashen Hale',
          description: 'Fights again, fully embracing the world’s cruelty.',
          status: 'alive',
        },
      ],
    },
    {
      chapterIndex: 28.5,
      title: 'Thunderclap Orb Discovery',
      summaryDetail:
        'Post-battle, Cedric Ashen Hale inspects the four masked casters’ bodies before patrol cleanup. From a torn robe, he retrieves a rough black iron orb—fist-sized, etched with odd runes—and a small scroll. Home, he channels mana; unstable energy hums, halting him from fear of explosion. The scroll names it Thunderclap Orb—a grenade-like weapon, lethal to late-rank casters within 10 meters if triggered right. Crafting needs Black Iron Shards (10 Mana Shard Crystals per ounce) and Flame Thunder Dust (20 per ounce), plus a mana array. At 50 crystals per orb, its mid-tier power tempts him as a trump card. No system skill registers, but he vows secrecy, planning a market trip for materials. By the fire, eyes gleam—chaos fuels his ambition to grow stronger amid the snow-dusted night.',
      terminology: [
        {
          name: 'Thunderclap Orb',
          description: 'A volatile explosive orb, deadly in close range.',
          nameBefore: 'Phích Lịch Lôi',
          descriptionBefore: 'A thunderous grenade-like weapon.',
        },
        {
          name: 'Black Iron Shards',
          description: 'Rare metal for crafting explosive devices.',
          nameBefore: 'Hắc Thiết Tinh',
          descriptionBefore: 'Black iron essence for weapon-making.',
        },
        {
          name: 'Flame Thunder Dust',
          description: 'Powder amplifying explosive force.',
          nameBefore: 'Hỏa Lôi Phấn',
          descriptionBefore: 'Fire-thunder powder for bombs.',
        },
      ],
      character: [
        {
          name: 'Cedric Ashen Hale',
          description: 'Finds Thunderclap Orb, plotting to craft more.',
          status: 'alive',
        },
      ],
    },
    {
      chapterIndex: 29,
      title: 'Sudden Wealth Strikes',
      summaryDetail:
        'Morning after carnage, Cedric Ashen Hale wakes calm. Outside, four masked bodies hang from a tree, blood crusted black. Giles Stout Brew gawks, “Who’s so ruthless?” Cedric replies coolly, “Me.” Giles stammers, disbelieving; Cedric just smirks. Midday, Victor Keen Edge arrives, bowing slightly, “Your spoils: 8 Prime Mana Crystals, 23 Mana Shard Crystals, 2 Iron Skin Wards, 3 Swift Step Wards, 1 Blazing Ember Rune.” Cedric masks glee, accepting the haul—heart racing at sudden riches. Once scraping for Mannac Dust Hardtack, now 800 Mana Shard Crystals’ worth stuns him. Giles gapes as Victor leaves. By the fire, Cedric counts, vowing to wield this wealth wisely against rogue casters and chaos. His resolve to flee Frosthaven Hollow sharpens, eyes alight with ambition.',
      terminology: [
        {
          name: 'Blazing Ember Rune',
          description: 'A fire-based rune with moderate destructive power.',
          nameBefore: 'Liệt Diễm Phù',
          descriptionBefore: 'A flame talisman for attack.',
        },
      ],
      character: [
        {
          name: 'Cedric Ashen Hale',
          description: 'Gains wealth from battle spoils, planning ahead.',
          status: 'alive',
        },
        {
          name: 'Giles Stout Brew',
          description: 'Shocked by Cedric’s lethal prowess.',
          status: 'alive',
        },
        {
          name: 'Victor Keen Edge',
          description: 'Delivers Cedric’s spoils with respect.',
          status: 'alive',
        },
      ],
    },
    {
      chapterIndex: 30,
      title: 'Trade Turns Profit',
      summaryDetail:
        'Cedric Ashen Hale plans his haul: 3 Prime Mana Crystals reserved for escape, the rest for resources. At Longspire Stone Hold’s market—now chaotic, Forge Gear Sect gone—he visits Hearth Bloom Vault, buying 10 Vital Breath Elixirs for a steep 1 Prime and 18 Mana Shard Crystals, tucking them close. Noting inflated prices, he spots a trade chance—Iron Skin Wards and Swift Step Wards will soar in demand. Spending nearly all loose crystals, he snags 63 Swift Step Wards and 64 Iron Skin Wards at 2 Mana Shard Crystals each—pre-chaos rates. Total cost drains him, but he bets on doubling profits as panic spikes. Leaving, he stifles excitement, “A merchant’s knack!” He’ll wait days, sell high, and hoard for exodus from Frosthaven Hollow. By the fire, system shows rank at 30/200—confidence swells amid the turmoil.',
      terminology: [
        {
          name: 'Hearth Bloom Vault',
          description: 'A market shop selling potions and elixirs.',
          nameBefore: 'Bảo Dược Các',
          descriptionBefore: 'A pavilion for medicinal goods.',
        },
      ],
      character: [
        {
          name: 'Cedric Ashen Hale',
          description: 'Invests spoils in trade, aiming for profit and escape.',
          status: 'alive',
        },
      ],
    },
  ],
}

// const meow = {
//     name: 'The Multiverse Meow Trials',
//     worldBuilding:
//       "The Supreme Divinities, a race of godlike beings, obliterate Earth to launch *Cosmic Hunt: Survival Nexus*, a multiverse reality show. Earth’s remnants form a virtual game-world where 7 billion players fight to survive an alien realm. For 20 days, monsters spawn daily, and at noon, a Cosmic Die rolls one of six events: (1) Global Catastrophe, (2) Random Event, (3) Monster Surge, (4) Resource Drop, (5) Arena Duel, (6) Skip. After 20 days, native Elves—a bio-technological plant-based civilization—gain partial freedom to hunt players, who must also fight back. After 90 days, all restrictions vanish, igniting a war where players and Elves slaughter each other until one side remains; the top-ranked survivors become Cosmic Sovereigns. Streaming drives loot and fame, with viewers influencing the game. Napurrleon ([Mr. The Meow Above All]), a chubby black cat and former High Meow Priest from a cat-worshipping civilization, enters as a player. His sealed powers unlock with levels, and he communicates via meows, translated only by the narrator (e.g., 'meow (Author Translator: “Bow!”)'). His laziness limits him to minimal aid—buffs or rare interventions—making him a unique, comical force.",
//       additionalNotes: `
//       ### 1 :
//       `,
//     chapters: [
//       {
//         chapterIndex: 1,
//         title: 'The Fall of Earth',
//         summaryDetail:
//           "Napurrleon, a chubby black cat, paces a quiet house, puzzled by the absence of his human servant who fed and cleaned for him. The narrator describes him: a plump, proud feline with a regal strut. A sudden tremor shakes the ground. He insists on being called [Mr. The Meow Above All], a former High Meow Priest from a cat-worshipping civilization, stranded here after a cosmic journey, bristling at 'fat cat' jabs. After a brief spat, the narrator agrees to his title. The narrator reveals Earth’s destruction by the Supreme Divinities for *Cosmic Hunt: Survival Nexus*. Napurrleon, baffled by gods rising without cat worship, claws the door open to find a void—his house orbiting the sun, Earth erased. With a grumble, he tears a spatial rift and leaps through, pursuing his lost worshiper.",
//         terminology: [
//           {
//             name: 'Supreme Divinities',
//             nameBefore: 'Borant Corporation',
//             description:
//               'Godlike beings who annihilated Earth for *Cosmic Hunt: Survival Nexus*, a multiverse reality show.',
//           },
//           {
//             name: 'Cosmic Hunt: Survival Nexus',
//             nameBefore: 'World Dungeon',
//             description:
//               'A virtual game-world where players survive monsters, Cosmic Die events, and Elves. After 90 days, only one side survives, with top ranks becoming Cosmic Sovereigns.',
//           },
//           {
//             name: 'Cosmic Sovereigns',
//             nameBefore: 'Interplanetary Arbiter',
//             description:
//               'Top-ranked survivors of the winning side (players or Elves) after 90 days, ruling the game-world.',
//           },
//           {
//             name: 'Cosmic Die',
//             nameBefore: 'N/A',
//             description:
//               'Rolls daily at noon, triggering: (1) Global Catastrophe, (2) Random Event, (3) Monster Surge, (4) Resource Drop, (5) Arena Duel, (6) Skip.',
//           },
//         ],
//         character: [
//           {
//             name: '[Mr. The Meow Above All] (Napurrleon)',
//             nameBefore: 'Princess Donut',
//             description:
//               'A chubby black male cat, ex-High Meow Priest from a cat-worshipping civilization. Demands the title [Mr. The Meow Above All], opens a spatial rift to find his human.',
//             status: 'alive',
//           },
//         ],
//       },
//       {
//         chapterIndex: 2,
//         title: 'Temple Trespass',
//         summaryDetail:
//           "Napurrleon’s rift drops him into the Divine Temple, facing Xarathor, a massive False God with glowing runes. [Mr. The Meow Above All] expects worship, puffing up as Xarathor grumbles in confusion. Viewers swarm in, comment interfaces flashing across the sky: casual watchers and high-tier VIPs—Gold, Platinum—marveling at the oddity. Xarathor hurls a spatial bolt; Napurrleon dodges and slashes back with claws. Their fight erupts into a flurry of teleportation and pounces, shaking the temple. Napurrleon eyes lignten up, blow a strike which almost cut the Divine Temple a half, and toghether with Xarathor. Comments multiply—'This cat’s insane!' from a Diamond VIP—as more tune in, pulling eyes from across the game-world. The escalating chaos draws Soltharion’s notice, his gaze sharpening on the unexpected spectacle.",
//         terminology: [
//           {
//             name: 'Divine Temple',
//             nameBefore: 'N/A',
//             description: 'A grand structure housing Xarathor, a False God and early game boss.',
//           },
//           {
//             name: 'False God',
//             nameBefore: 'N/A',
//             description: 'Beings like Xarathor with natural power, below True Gods in strength.',
//           },
//         ],
//         character: [
//           {
//             name: '[Mr. The Meow Above All] (Napurrleon)',
//             nameBefore: 'Princess Donut',
//             description: 'Sparks viewer frenzy while fighting Xarathor with agility and claws.',
//             status: 'alive',
//           },
//           {
//             name: 'Xarathor',
//             nameBefore: 'N/A',
//             description:
//               'A False God using teleportation and spatial bolts, irritated by Napurrleon.',
//             status: 'alive',
//           },
//         ],
//       },
//       {
//         chapterIndex: 2.1,
//         title: 'Clash of Divinity',
//         summaryDetail:
//           "Xarathor got heavily injured from Napurrleon strike, he decided to rollback time to heal, but Napurrleon evades a heavy strike, clawing at runes. Xarathor struggling to fight Napurrleon, used his ultimate armor but still didnt match to the cat. Viewer interfaces flood the sky—Platinum and Diamond VIPs gush, ‘Crazy cat!’—as cross-server watchers pile in, stats soaring. Whispers rank gods: Prototype (worship-born), False (natural power), True (law-benders). Soltharion tracks the surge, millions hooked, not sure what to do, let the cat finish the boss or end the chaos. The True God of Chaos has never been this confuse. He decided to moves to end Napurrleon. Comments erupt—'Hands off!' from a Ruby VIP—forcing him to pivot. With a scowl, he seals Napurrleon’s power in a flash of light and hurls him out. The temple stills, but Soltharion digs into the viewer spike, unsettled by the cat’s pull. Napurrleon lands hard, oblivious to the uproar he’s sparked.",
//         terminology: [
//           {
//             name: 'Prototype God',
//             nameBefore: 'N/A',
//             description: 'Gods ascended through worship, weaker than False Gods.',
//           },
//           {
//             name: 'True God',
//             nameBefore: 'N/A',
//             description:
//               'Beings like Soltharion who bend creation’s laws, one of the highest divine tier.',
//           },
//         ],
//         character: [
//           {
//             name: '[Mr. The Meow Above All] (Napurrleon)',
//             nameBefore: 'Princess Donut',
//             description:
//               'Fights Xarathor, drawing VIP viewers, until sealed and thrown by Soltharion.',
//             status: 'alive',
//           },
//           {
//             name: 'Xarathor',
//             nameBefore: 'N/A',
//             description: 'Battles Napurrleon with rollback and energy, briefly outdone.',
//             status: 'alive',
//           },
//           {
//             name: 'Soltharion',
//             nameBefore: 'N/A',
//             description:
//               'A True God who nearly kills Napurrleon but seals him after viewer backlash, probes the anomaly.',
//             status: 'alive',
//           },
//         ],
//       },
//       {
//         chapterIndex: 3,
//         title: 'Sealed Awakening',
//         summaryDetail:
//           "Napurrleon crashes into a wasteland, flung by Soltharion, his bulk squashing a Bone Goblin. A faint spatial ripple flickers from the corpse, hinting his sealed powers stir with kills. Sprawling lazily, he barely notices as a voice announces: 7 billion players entered, now 5 billion, the weak culled. Dust swirls in the bleak expanse; a Bone Wraith skitters nearby, ignored by the napping cat. His tail twitches, boredom settling in as the wraith’s claws scrape the ground. Napurrleon also notice the bug: as he levels, his sealed powers will unlock. His starting stats are low—Strength 5, Agility 10, Charisma 20—but promise growth. A Lich appear but Napurrleon easly defeat it using fireball and waterstream - lạc đà gầy còn hơn ngựa béo tiếng anh. After a long stretch, he yawns and tears a rift—'meow (Author Translator: “Get my servant!”)'—summoning Emily Carter. She tumbles through, bewildered, landing before the smug, lounging feline, who eyes his glitchy potential with quiet glee.",
//         terminology: [
//           {
//             name: 'Bone Goblin',
//             nameBefore: 'Goblin',
//             description:
//               'A weak skeletal monster, crushed by Napurrleon’s landing, triggering a power glitch.',
//           },
//           {
//             name: 'Bone Wraith',
//             nameBefore: 'Goblin Murder Dozer',
//             description: 'A day-one monster with bony claws, a basic threat.',
//           },
//         ],
//         character: [
//           {
//             name: '[Mr. The Meow Above All] (Napurrleon)',
//             nameBefore: 'Princess Donut',
//             description:
//               'Lands on a Bone Goblin, noticing his sealed powers return via kills. Summons Emily Carter at chapter’s end.',
//             status: 'alive',
//           },
//           {
//             name: 'Emily Carter',
//             nameBefore: 'Carl',
//             description: 'An American college student summoned by Napurrleon, arriving confused.',
//             status: 'alive',
//           },
//         ],
//       },
//       {
//         chapterIndex: 4,
//         title: 'Cosmic Calculations',
//         summaryDetail:
//           'Soltharion, in a polished council hall, studies Napurrleon’s impact. Viewer numbers jump—10 million cross-server hits during the Xarathor fight, tripling post-sealing. He pitches merging five servers, adding 25 billion players, highlighting the cat’s chaotic draw. CEO Vanessa Holt resists, citing costs, but Soltharion presents charts: engagement sags without oddities, Napurrleon boosts it 30%. Investor James Reed demands profit margins; Soltharion forecasts a 50% revenue surge from premium streams. After heated debate, they approve, expanding *Cosmic Hunt* to 30 billion players with three bosses: Xarathor, Veylith, Zorak. Soltharion smirks at the windfall (He will be the best employee of the universe year). Napurrleon naps, oblivious, his fame swelling across the multiverse.',
//         terminology: [],
//         character: [
//           {
//             name: '[Mr. The Meow Above All] (Napurrleon)',
//             nameBefore: 'Princess Donut',
//             description: 'Unwittingly fuels Soltharion’s server merger with his viewer draw.',
//             status: 'alive',
//           },
//           {
//             name: 'Soltharion',
//             nameBefore: 'N/A',
//             description:
//               'Pushes for a 5-server merge, adding 25 billion players, based on Napurrleon’s pull.',
//             status: 'alive',
//           },
//           {
//             name: 'Vanessa Holt',
//             nameBefore: 'N/A',
//             description: 'A Supreme Divinity CEO wary of costs, convinced by data.',
//             status: 'alive',
//           },
//           {
//             name: 'James Reed',
//             nameBefore: 'N/A',
//             description: 'An investor fixated on profit, swayed by Soltharion’s numbers.',
//             status: 'alive',
//           },
//         ],
//       },
//       {
//         chapterIndex: 5,
//         title: 'Emily’s Descent',
//         summaryDetail:
//           'Emily Carter, an American college student, walks home from KFC in Seattle as buildings crumble—yet no one’s harmed. A voice declares Earth’s end, streaming *Cosmic Hunt*. Matter fractures—buildings shatter, trees split—then fades to dust in a golden burst. Emily awakens on floating island A402-ZA, a forested expanse. Her LitRPG status offers a Rusty Sword and Cloth Vest. An old Elf, Faelar, fishes nearby, mentioning ‘first recharge’ before vanishing with a warning of danger after knowning she doesnt have any cosmic money. Giant ants surround her in the forest, herding her toward the Palace of Fate (after knowing she not recharged yet - by asking), a half-grand, half-grim gate (carefully describe the gate). Trapped with others, ants demand treasure; two enter and vanish, prompting sneers about ‘weak newbies.’ Emily Carter ask an ant and know that, if a ‘recharged’ player are there, they re done for since a Recharged player can teleport inside structures. A rift pulls her to Napurrleon; she hugs him, rattled, as he waves an alien wallet. (Change scene) Xarathor, in the Divine Temple, stares at bank alerts—funds vanishing fast. His wallet’s gone; he rushes to Soltharion, pleading for a refund, citing retro trends. Soltharion shuts him down, suggesting a card lock. Meanwhile, [Mr. The Meow Above All] flaunts the stolen wallet as Emily Carter gapes, using all of Xarathor money for `first recharge`',
//         terminology: [
//           {
//             name: 'Palace of Fate',
//             nameBefore: 'N/A',
//             description:
//               'A mysterious structure ants force players into for treasure, with grim outcomes.',
//           },
//           {
//             name: 'First Recharge',
//             nameBefore: 'N/A',
//             description:
//               'A payment in alien currency, by first recharged, players get a lot of convinients.',
//           },
//           {
//             name: 'A402-ZA',
//             nameBefore: 'N/A',
//             description: 'A floating island in the game-world, Emily’s starting zone.',
//           },
//         ],
//         character: [
//           {
//             name: 'Emily Carter',
//             nameBefore: 'Carl',
//             description:
//               'An American college student from Seattle, survives Earth’s fall, equips a Rusty Sword and Cloth Vest. Summoned to Napurrleon after an ant ambush.',
//             status: 'alive',
//           },
//           {
//             name: '[Mr. The Meow Above All] (Napurrleon)',
//             nameBefore: 'Princess Donut',
//             description: 'Reunites with Emily, flashing an alien wallet at ‘recharge’ talk.',
//             status: 'alive',
//           },
//           {
//             name: 'Faelar',
//             nameBefore: 'N/A',
//             description: 'An old Elf who warns Emily of danger before vanishing.',
//             status: 'alive',
//           },
//         ],
//       },
//     ],
//   }

export const newStories = [everyOneHasAPlanet, magicWorldSurvivor].map((it) => ({
  ...it,
  chapters: it.chapters.map((item, index) => ({
    ...item,
    id: index + 1,
    chapterIndex: index + 1,
    parentId: it.id,
  })),
}))
