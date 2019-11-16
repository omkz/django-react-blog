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


class PostSerializer(serializers.ModelSerializer):
    author = serializers.StringRelatedField(default=serializers.CurrentUserDefault(), read_only=True)
    created_at = serializers.DateTimeField(format="%d %B %Y", required=False, read_only=True)

    class Meta:
        model= Post
        fields = ["id","title", "body", "is_public", "created_at", "updated_at", "author"]

