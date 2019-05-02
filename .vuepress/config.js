module.exports = {
  base: "/spring-notebook/",
  title: 'Spring Notebook',
  themeConfig: {
    nav: [
      {text: 'Home', link: '/'},
      {text: 'Drafts', 
        items: [
          {text: "Draft 1", link: '/drafts/draft1' },
          {text: "Draft 2", link: '/drafts/draft2'}
        ]
      },
      {text: 'Topics', 
        items: [
          {text: "Topic 1", link: '/topics/topic1' },
          {text: "Topic 2", link: '/topics/topic2'}
        ]
      }
    ],
    sidebar: {
      '/drafts/': [
        'draft1',
        'draft2'
      ],
      '/topics/': [
        'topic1',
        'topic2'
      ],
      '/': [
        '',
        'refs',
        'status'
      ]
    }
  }
}
