# swpp2020-team17
[![Build Status](https://travis-ci.org/swsnu/swpp2020-team17.svg?branch=master)](https://travis-ci.org/swsnu/swpp2020-team17)
[![Coverage Status](https://coveralls.io/repos/github/swsnu/swpp2019-team17/badge.svg?branch=master)](https://coveralls.io/github/swsnu/swpp2019-team17?branch=master)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=swsnu_swpp2019-team17&metric=alert_status)](https://sonarcloud.io/dashboard?id=swsnu_swpp2019-team17)


# Frontend
<pre><code>sh runFront.sh
</code></pre>

# Backend
<pre><code>sh runBack.sh
</code></pre>

# Testing
After activating venv,
1. Test frontend
<pre><code>cd frontend   
yarn add coverage
yarn test --coverage --watchAll=false
</code></pre>

2. Test backend
<pre><code>pip install coveralls
coverage run --source='.' manage.py test
</code></pre>
