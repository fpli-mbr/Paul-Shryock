---
title: Resume
excerpt: View Paul Shryock's professional resume, which includes previous work experience, education, skills, and software used.
slug: resume
date: 2019-01-01T00:00:00-5

seo_title: Paul Shryock's Professional Resume

nav_title: Resume
navigation: 2

body_class: [
	page,
	resume
]
---

{{ profile.name }}

{{ profile.title }}

{{ profile.statement }}

## Experience

{% for employer in experience.employers limit:7 %}

- **{{ employer.role }}**  
	{{ employer.company }} _({{ employer.start_date | date: '%B, %Y' }}{% if employer.end_date %}&ndash;{{ employer.end_date | date: '%Y' }}{% endif %})_

	{{ employer.responsibilities }}

{% endfor %}

## Education

{% for school in education.schools limit:5 %}

- **{{ school.school }}**{% if school.url %}, _[{{ school.url }}]({{ school.url }})_{% endif %}  
	_({{ school.start_date | date: '%B, %Y' }}{% if school.end_date %}&ndash;{{ school.end_date | date: '%B, %Y' }}{% else %}&ndash;present{% endif %})_  
	{% if school.degree %}_{{ school.degree }}_{% endif %}
	{{ school.details }}

{% endfor %}