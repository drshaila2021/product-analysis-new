import React from "react";
import "./Blogs.css";

//blog component
const Blogs = () => {
  return (
    <div className="blogs">
      <h3>Know about....</h3>
      <hr />
      <h4>Context API</h4>
      <p>
        Conext API is the one that helps to pass props data from one component
        to other without doing step by step prop drilling. Usually when data
        sharing is required for example from grand parent to grand child, it
        first need to pass from grand parent to parent and then parent to child.
        But context API makes it easy, using Context API data can be shared from
        grand parnet to grand child direct.
      </p>
      <hr />
      <h4>Semantic Element</h4>
      <p>
        A semantic element is the one which describes it meaning by itself. When
        these types of element are used, it makes clear sense to browser and
        developer. Some example of HTML semantic elements are &lt;header &gt;,
        &lt; nav &gt; , &lt; section &gt;. When used it clarifies it meaning
        compare to non-semantic tag like &lt; div &gt;, &lt; span &gt;.
      </p>
    </div>
  );
};

export default Blogs;
