---
layout: post
title: "Learning Jekyll!"
date: 2018-10-13 13:32:20 +0300
description: Jekyll is simple, easy and fast.
img:  # Add image post (optional)
---
Add all the posts in  `_posts` directory. 
+ Add new posts
+ Re-build the site to see your changes.  `jekyll build --watch` 
+ Serve the files which generate _site `jekyll serve`, which launches a web server and auto-regenerates your site when a file is updated.


Jekyll also offers powerful support for code snippets:

{% highlight ruby %}
def print_hi(name)
  puts "Hi, #{name}"
end
print_hi('Tom')
#=> prints 'Hi, Tom' to STDOUT.
{% endhighlight %}

# Create Arrays
 First we’ll create a new array called Topic, each item is indented with two spaces then starts with a hyphen.

{% highlight html %}
	topics:
	  - jekyll
	  - raphael
	  - pusher
{% endhighlight %}



{% highlight ruby %}
{% for topic in page.topics %}
<li>{{ topic }}</li>
{% endfor %}
{% endhighlight %}

Check out the [Jekyll docs][jekyll-docs] for more info on how to get the most out of Jekyll. File all bugs/feature requests at [Jekyll’s GitHub repo][jekyll-gh]. If you have questions, you can ask them on [Jekyll Talk][jekyll-talk].

Please share your question below.

[jekyll-docs]: https://jekyllrb.com/docs/home
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-talk]: https://talk.jekyllrb.com/
