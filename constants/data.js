export const textbooks = [
  {
    id: 1,
    title: "Atlas hub",
    author: "Helmut",
    modification: "24/10/2021",
    stars: "7",
    userId: 0,
    tab: [0, 2],
    private: false,
    deleted: false
  },
  {
    id: 2,
    title: "Hitchhiker's Guide to the Galaxy",
    author: "Douglas Adams",
    modification: "5/3/1979",
    stars: "42",
    userId: 1,
    tab: [0, 1, 3],
    private: false,
    deleted: false
  },
  {
    id: 3,
    title: "Lorem ipsum dolor sit amet",
    author: "Giovanni",
    modification: "12/12/135",
    stars: "2",
    userId: 2,
    tab: [0, 1],
    private: false,
    deleted: false
  },
  {
    id: 4,
    title: "Zahradničení",
    author: "Helmut",
    modification: "14/10/2021",
    stars: "2",
    userId: 0,
    tab: [0, 2],
    private: false,
    deleted: false
  },
]

export const paths = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"]

export const userHelmut = {
  name: "Helmut Větvička",
  password: "helmut@vetvicka.com",
  email: "helmut@vetvicka.com",
  description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam rhoncus aliquam metus. Aliquam erat volutpat. Pellentesque ipsum. Pellentesque arcu. Sed elit dui, pellentesque a, faucibus vel, interdum nec, diam."
}

export const users = [
  {
    id: 0,
    name: "Helmut Větvička",
  },
  {
    id: 1,
    name: "Douglas Adams",
  },
  {
    id: 2,
    name: "Giovanni",
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
