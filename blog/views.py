from .models import Post
from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from blog.serializers import UserSerializer, GroupSerializer, PostSerializer
from rest_framework.permissions import IsAuthenticated
from rest_framework import permissions
from rest_framework.response import Response



class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer

class GroupViewSet(viewsets.ModelViewSet):
    queryset = Group.objects.all()
    serializer_class = GroupSerializer

class PostViewSet(viewsets.ModelViewSet):

    queryset = Post.objects.filter(is_public__exact=True)
    serializer_class = PostSerializer

    def get_permissions(self):

        if self.action == 'list':
            permission_classes = [permissions.AllowAny,]
        else:
            permission_classes = [IsAuthenticated]
        return [permission() for permission in permission_classes]


    def perform_create(self, serializer):
        serializer.save(author=self.request.user)


