export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "60dc2f35feb308a40cf6f6be",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-xwja31fm",
                  apiId: "5edc4cc6-09b1-48ca-9e83-f39787db97f9",
                },
                {
                  buildHookId: "60dc2f3603802692e3719acf",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-medndgng",
                  apiId: "e8db9982-dbc3-4bce-8a33-181a47ae3093",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/rismy-etc/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-medndgng.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
