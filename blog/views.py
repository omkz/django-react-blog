from .models import Post
from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from blog.serializers import UserSerializer, GroupSerializer, PostSerializer
from rest_framework.permissions import IsAuthenticated

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer

class GroupViewSet(viewsets.ModelViewSet):
    queryset = Group.objects.all()
    serializer_class = GroupSerializer

class PostViewSet(viewsets.ModelViewSet):
    permission_classes = (IsAuthenticated,)

    queryset = Post.objects.filter(is_public__exact=True)
    serializer_class = PostSerializer

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)
