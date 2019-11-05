from rest_framework import serializers

from django.contrib.auth.models import User, Group
from blog.models import Post

class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['url', 'username', 'email', 'groups']


class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ['url', 'name']


class PostSerializers(serializers.ModelSerializer):
    class Meta:
        model= Post
        fields = ["id","title", "body", "is_public", "created_at"]