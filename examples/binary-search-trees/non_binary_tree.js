const non_tree = {
  key: 5,
  value: "I'm",
  left: {
    key: 3,
    value: 'Not',
    left: {
      key: 2,
      value: 'thing',
      left: {
        key: 7,
        value: "Blah",
        left: null,
        right: null
      },
      right: null
    },
    right: null
  },
  right: {
    key: 7,
    value: 'Binary',
    left: null,
    right: {
      key: 8,
      value: "other"
    }
  }
}

module.exports = non_tree;
