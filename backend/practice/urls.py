from practice.views import test

urlpatterns = [
    url(r'^admin/', admin.site.urls),
	url('^$', test, name='test'),
]
