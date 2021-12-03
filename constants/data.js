export const dummyPages = [
  {
    id: 0,
    name: "Lorem ipsum",
    content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cras pede libero, dapibus nec, pretium sit amet, tempor quis. Etiam dictum tincidunt diam. Etiam dui sem, fermentum vitae, sagittis id, malesuada in, quam. Nunc tincidunt ante vitae massa. Quisque tincidunt scelerisque libero. Vestibulum erat nulla, ullamcorper nec, rutrum non, nonummy ac, erat. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Etiam posuere lacus quis dolor. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Nulla quis diam. Aliquam erat volutpat. Integer malesuada.",
    selected: "ipsum",
    meaning: "Mauris dictum facilisis augue."
  },
  {
    id: 1,
    name: "Etiam commodo",
    content: "Etiam commodo dui eget wisi. Nulla quis diam. Integer tempor. Etiam bibendum elit eget erat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Praesent dapibus. Etiam commodo dui eget wisi. Nullam eget nisl. Aliquam erat volutpat. Aliquam ornare wisi eu metus. Integer imperdiet lectus quis justo. Mauris dictum facilisis augue. Phasellus rhoncus. Vivamus luctus egestas leo. Nunc dapibus tortor vel mi dapibus sollicitudin. Etiam bibendum elit eget erat. Etiam posuere lacus quis dolor. Integer lacinia. Aliquam ante.",
    selected: "Integer tempor",
    meaning: "Praesent id justo in neque elementum ultrices."
  },
  {
    id: 2,
    name: "Aliquam in lorem",
    content: "Aliquam in lorem sit amet leo accumsan lacinia. Etiam ligula pede, sagittis quis, interdum ultricies, scelerisque eu. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Morbi leo mi, nonummy eget tristique non, rhoncus non leo. Aliquam ornare wisi eu metus. Etiam quis quam. Praesent id justo in neque elementum ultrices. Phasellus rhoncus. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam dictum tincidunt diam. Aliquam erat volutpat. Sed elit dui, pellentesque a, faucibus vel, interdum nec, diam.",
    selected: "scelerisque eu",
    meaning: "Etiam neque. Mauris metus. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?"
  },
  {
    id: 3,
    name: "Nullam faucibus",
    content: "Nullam faucibus mi quis velit. Nullam sit amet magna in magna gravida vehicula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Donec vitae arcu. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Etiam sapien elit, consequat eget, tristique non, venenatis quis, ante. Aenean id metus id velit ullamcorper pulvinar. Sed convallis magna eu sem. Etiam neque. Mauris metus. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus. Maecenas libero. Duis ante orci, molestie vitae vehicula venenatis, tincidunt ac pede. Aliquam in lorem sit amet leo accumsan lacinia. Etiam bibendum elit eget erat. Pellentesque arcu. Vivamus ac leo pretium faucibus.",
    selected: "venenatis quis",
    meaning: "Ipsum ipsum"
  },
  {
    id: 4,
    name: "Mauris dictum",
    content: "Mauris dictum facilisis augue. Etiam dui sem, fermentum vitae, sagittis id, malesuada in, quam. Praesent id justo in neque elementum ultrices. Praesent dapibus. Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus. Pellentesque sapien. Integer tempor. Integer vulputate sem a nibh rutrum consequat. Nullam faucibus mi quis velit. Proin in tellus sit amet nibh dignissim sagittis. Etiam neque. Etiam egestas wisi a erat. In convallis. Fusce nibh. Proin in tellus sit amet nibh dignissim sagittis. Nullam feugiat, turpis at pulvinar vulputate, erat libero tristique tellus, nec bibendum odio risus sit amet ante. Nam sed tellus id magna elementum tincidunt.",
    selected: "Pellentesque sapien",
    meaning: "Etiam dui sem, fermentum vitae, sagittis id, malesuada in, quam. Nunc tincidunt ante vitae massa. Quisque tincidunt scelerisque libero. Vestibulum erat nulla, ullamcorper nec, rutrum non, nonummy ac, erat."
  },
]

// https://redux.js.org/usage/structuring-reducers/normalizing-state-shape

export const textbooks = {
  byId: {
  "0": {
    id: 0,
    title: "Atlas hub",
    author: "Helmut",
    modification: "24/10/2021",
    stars: 7,
    starSet: false,
    userId: 0,
    tab: [0, 2],
    private: false,
    deleted: false,
    favourite: false,
    pages: [
      {
        id: 0,
        name: "Hřib Smrkový",
        content: "Hřib smrkový je sice zaměnitelný za jiné hřiby, ale pouze za jedlé nebo neškodné druhy. Patří mezi pravé hřiby, které se vyznačují tím, že na řezu nemění barvu. Povrch klobouku hřibu smrkového bývá takto hladký a jemně vrásčitý či hrbolkatý. Spodní část klobouku je zpočátku bílá až bělavá, později olivově žloutne.",
        selected: "jiné hřiby",
        meaning: "Například hřib dubový, hřib borový"
      },
      {
        id: 1,
        name: "Hlíva ústřičná",
        content: "Vyznačuje se ojedinělou kombinací zdravotně prospěšných látek, jakými jsou například některé vitaminy (především z řady B), dále proteiny, steroly, aminokyseliny, mastné kyseliny a potřebné stopové prvky. Vůbec nejvýznamnější složku hlívy však tvoří glukany, konkrétně Beta 1,3/1,6 D glukany. Hlíva ústřičná upravuje velice účinně hladinu cholesterolu v krvi a krevní tlak, odstraňuje nebo tlumí bolesti některých kloubových onemocnění, odstraňuje bradavice virového původu, pomáhá alergikům, astmatikům a diabetikům a její pravidelná konzumace představuje výbornou prevenci proti nebezpečným civilizačním onemocněním. Lékaři už ji dokonce začali doporučovat a využívat při chemoterapiích, protože zmírňuje jejich nepříjemné vedlejší účinky. Její kouzlo tkví ve významném posilování imunitního systému.",
        selected: "stopové prvky",
        meaning: "Fe, K, P, Na, Zn, Se, Cr, Cu, B, I"
      },
      {
        id: 2,
        name: "Bedla vysoká",
        content: "Obsahuje látky s antioxidačními a antibakteriálními účinky, značné množství proteinů, mastné kyseliny, imunomodulační glukany, β-karoten a v menší míře lykopen, jež snižuje riziko kardiovaskulárních a onkologických onemocnění. Zlepšuje funkci prostaty a dobře prospívá pleti. Z minerálních látek obsahuje ve vyšší míře draslík.",
        selected: "β-karoten",
        meaning: "Betakaroten je významný karotenoid, který u mnoha organismů slouží buď jako žlutočervené barvivo, nebo u živočichů jako prekurzor vitaminu A. Z jedné molekuly β-karotenu vznikají dvě molekuly vitamínu A. Samostatně pak hraje důležitou roli jako antioxidant."
      },
    ]
  },
 "1": {
    id: 1,
    title: "Hitchhiker's Guide to the Galaxy",
    author: "Douglas Adams",
    modification: "5/3/1979",
    stars: 42,
    starSet: false,
    userId: 1,
    tab: [0, 3],
    private: false,
    deleted: false,
    favourite: true,
    pages: [
      {
        id: 0,
        name: "The Hitchhikers Guide to the Galaxy",
        content: "The beginning. Like I wrote earlier, it all starts seconds before the Earth is demolished to make way for a galactic freeway, Arthur Dent is plucked off the planet by his friend the Alien Ford Prefect who, for the last fifteen years, has been posing as an out-of-work actor. Hopefully, they didn’t forget to take a towel.",
        selected: "",
        meaning: ""
      },
      {
        id: 1,
        name: "The Restaurant at the End of the Universe",
        content: "Arthur Dent and his comrades in arms hurtle across space desperately in search of a place to eat. Their destination? The ultimate hot spot for an evening of apocalyptic entertainment and fine dining, where the food literally speaks for itself.",
        selected: "",
        meaning: ""
      },
      {
        id: 2,
        name: "Life, the Universe and Everything",
        content: "Sick of looking at the night sky above their heads, the unhappy inhabitants of planet Krikkit plan to destroy the Universe. Only Arthur and his travelling companions stand between the white killer robots of Krikkit and their goal of total annihilation.",
        selected: "",
        meaning: ""
      },
      {
        id: 3,
        name: "So Long, and Thanks for All the Fish",
        content: "Back on Earth, Arthur Dent is ready to believe that the past years were all just a figment of his imagination. But a gift-wrapped fishbowl with a cryptic inscription, the mysterious disappearance of Earth’s dolphins, and the discovery of his battered copy of The Hitchhiker’s Guide to the Galaxy all conspire to give Arthur the sneaking suspicion that something otherworldly is indeed going on.",
        selected: "",
        meaning: ""
      },
      {
        id: 4,
        name: "Mostly Harmless",
        content: "Arthur Dent makes the terrible mistake of starting to enjoy life a bit, and immediately all hell breaks loose. This is where the original novels written by Douglas Adams end.",
        selected: "",
        meaning: ""
      },
    ]
  },
 "2": {
    id: 2,
    title: "Lorem ipsum dolor sit amet",
    author: "Giovanni",
    modification: "12/12/135",
    stars: 2,
    starSet: false,
    userId: 2,
    tab: [0, 1],
    private: false,
    deleted: false,
    favourite: false,
    pages: dummyPages
  },
 "3": {
    id: 3,
    title: "Zahradničení",
    author: "Helmut",
    modification: "14/10/2021",
    stars: 2,
    starSet: false,
    userId: 0,
    tab: [0, 2],
    private: false,
    deleted: false,
    favourite: false,
    pages: dummyPages
  },
 "4": {
    id: 4,
    title: "Brum",
    author: "Helmut",
    modification: "11/11/2021",
    stars: 2,
    starSet: false,
    userId: 0,
    tab: [0, 2],
    private: true,
    deleted: false,
    favourite: false,
    pages: dummyPages
  },
 "5": {
    id: 5,
    title: "Vžum",
    author: "Helmut",
    modification: "11/11/2021",
    stars: 4,
    starSet: false,
    userId: 0,
    tab: [0, 2],
    private: true,
    deleted: false,
    favourite: false,
    pages: dummyPages
  },
 "6": {
    id: 6,
    title: "Mlask",
    author: "Helmut",
    modification: "11/11/2021",
    stars: 1,
    starSet: false,
    userId: 0,
    tab: [2],
    private: false,
    deleted: false,
    favourite: false,
    pages: dummyPages
  },
 "7": {
    id: 7,
    title: "Mňouk",
    author: "Helmut",
    modification: "11/11/2021",
    stars: 3,
    starSet: false,
    userId: 0,
    tab: [2],
    private: false,
    deleted: false,
    favourite: false,
    pages: dummyPages
  },
 "8": {
    id: 8,
    title: "Nesnesitelná lehkost bytí",
    author: "Milan Kundera",
    modification: "11/11/2021",
    stars: 11,
    starSet: false,
    userId: 3,
    tab: [3],
    private: false,
    deleted: false,
    favourite: true,
    pages: dummyPages
  },
  "9": {
      id: 9,
    title: "Gödel, Escher, Bach",
    author: "Douglas Hofstadter",
    modification: "11/11/2021",
    stars: 13,
    starSet: false,
    userId: 4,
    tab: [3],
    private: false,
    deleted: false,
    favourite: true,
    pages: dummyPages
  },
  "10": {
      id: 10,
    title: "Co budeme vařit",
    author: "Helmutka",
    modification: "10/10/2021",
    stars: 4,
    starSet: false,
    userId: 5,
    tab: [1],
    private: false,
    deleted: false,
    favourite: false,
    pages: dummyPages
  },
  "11": {
      id: 11,
    title: "Bez práce nejsou koláče",
    author: "Šéf",
    modification: "10/10/2021",
    stars: 0,
    starSet: false,
    userId: 6,
    tab: [1],
    private: false,
    deleted: false,
    favourite: false,
    pages: dummyPages
  },
  "12": {
    id: 12,
    title: "Hitchhiker's Guide to the Galaxy",
    author: "Douglas Adams",
    modification: "5/3/1979",
    stars: 42,
    starSet: false,
    userId: 1,
    tab: [],
    private: false,
    deleted: false,
    favourite: true,
    pages: [
      {
        id: 0,
        name: "The Hitchhikers Guide to the Galaxy",
        content: "The beginning. Like I wrote earlier, it all starts seconds before the Earth is demolished to make way for a galactic freeway, Arthur Dent is plucked off the planet by his friend the Alien Ford Prefect who, for the last fifteen years, has been posing as an out-of-work actor. Hopefully, they didn’t forget to take a towel.",
        selected: "Alien",
        meaning: "Ufoun"
      },
      {
        id: 1,
        name: "The Restaurant at the End of the Universe",
        content: "Arthur Dent and his comrades in arms hurtle across space desperately in search of a place to eat. Their destination? The ultimate hot spot for an evening of apocalyptic entertainment and fine dining, where the food literally speaks for itself.",
        selected: "",
        meaning: ""
      },
      {
        id: 2,
        name: "Life, the Universe and Everything",
        content: "Sick of looking at the night sky above their heads, the unhappy inhabitants of planet Krikkit plan to destroy the Universe. Only Arthur and his travelling companions stand between the white killer robots of Krikkit and their goal of total annihilation.",
        selected: "",
        meaning: ""
      },
      {
        id: 3,
        name: "So Long, and Thanks for All the Fish",
        content: "Back on Earth, Arthur Dent is ready to believe that the past years were all just a figment of his imagination. But a gift-wrapped fishbowl with a cryptic inscription, the mysterious disappearance of Earth’s dolphins, and the discovery of his battered copy of The Hitchhiker’s Guide to the Galaxy all conspire to give Arthur the sneaking suspicion that something otherworldly is indeed going on.",
        selected: "",
        meaning: ""
      },
      {
        id: 4,
        name: "Mostly Harmless",
        content: "Arthur Dent makes the terrible mistake of starting to enjoy life a bit, and immediately all hell breaks loose. This is where the original novels written by Douglas Adams end.",
        selected: "",
        meaning: ""
      },
    ]
  },
  }
}


export const dummyTextbook = {
  id: 4,
  title: "Zahradničení",
  author: "Helmut",
  modification: "14/10/2021",
  stars: 2,
  starSet: false,
  private: false,
  deleted: false,
  favourite: true,
  pages: dummyPages
}


export const paths = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"]

export const userHelmut = {
  id: 0,
  name: "Helmut Větvička",
  password: "helmut@vetvicka.com",
  email: "helmut@vetvicka.com",
  description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam rhoncus aliquam metus. Aliquam erat volutpat. Pellentesque ipsum. Pellentesque arcu. Sed elit dui, pellentesque a, faucibus vel, interdum nec, diam."
}

export const users = [
  {
    id: 0,
    name: "Helmut Větvička",
    description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam rhoncus aliquam metus. Aliquam erat volutpat. Pellentesque ipsum. Pellentesque arcu. Sed elit dui, pellentesque a, faucibus vel, interdum nec, diam."
  },
  {
    id: 1,
    name: "Douglas Adams",
    description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam rhoncus aliquam metus. Aliquam erat volutpat. Pellentesque ipsum. Pellentesque arcu. Sed elit dui, pellentesque a, faucibus vel, interdum nec, diam."
  },
  {
    id: 2,
    name: "Giovanni",
    description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam rhoncus aliquam metus. Aliquam erat volutpat. Pellentesque ipsum. Pellentesque arcu. Sed elit dui, pellentesque a, faucibus vel, interdum nec, diam."
  },
  {
    id: 3,
    name: "Milan Kundera",
    description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam rhoncus aliquam metus. Aliquam erat volutpat. Pellentesque ipsum. Pellentesque arcu. Sed elit dui, pellentesque a, faucibus vel, interdum nec, diam."
  },
  {
    id: 4,
    name: "Douglas Hofstadter",
    description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam rhoncus aliquam metus. Aliquam erat volutpat. Pellentesque ipsum. Pellentesque arcu. Sed elit dui, pellentesque a, faucibus vel, interdum nec, diam."
  },
  {
    id: 5,
    name: "Helmutka",
    description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam rhoncus aliquam metus. Aliquam erat volutpat. Pellentesque ipsum. Pellentesque arcu. Sed elit dui, pellentesque a, faucibus vel, interdum nec, diam."
  },
  {
    id: 6,
    name: "Šéf",
    description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam rhoncus aliquam metus. Aliquam erat volutpat. Pellentesque ipsum. Pellentesque arcu. Sed elit dui, pellentesque a, faucibus vel, interdum nec, diam."
  },
]

export const collaborators = [
  {
    id: 1,
    name: "Helmut",
    wasAdded: false
  },
  {
    id: 2,
    name: "Ing. Helmut",
    wasAdded: false
  },
  {
    id: 3,
    name: "Helmut Jr.",
    wasAdded: true
  },
  {
    id: 4,
    name: "Helmutka",
    wasAdded: true
  },
]
