from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase
from xblog.models import Post, Category
from django.contrib.auth.models import User


class PostsTest(APITestCase):

    def test_view_posts(self):
        url = reverse('xblog_api:listcreate')
        response = self.clent.get(url, format='json')
