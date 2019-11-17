from .models import Post
from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from blog.serializers import UserSerializer, GroupSerializer, PostSerializer
from rest_framework.permissions import AllowAny
from rest_framework.decorators import action
from rest_framework.response import Response
from .permissions import IsOwnerOrReadOnly
from django.shortcuts import get_object_or_404

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer

class GroupViewSet(viewsets.ModelViewSet):
    queryset = Group.objects.all()
    serializer_class = GroupSerializer

class PostViewSet(viewsets.ModelViewSet):
    permission_classes = [IsOwnerOrReadOnly]
    serializer_class = PostSerializer

    def get_queryset(self, *args, **kwargs):
        return Post.objects.all().filter(author=self.request.user)

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)

    """
    GET all public post without permission
    """
    @action(methods=['get'], detail=False, permission_classes=[AllowAny])
    def public(self, request):
        queryset = Post.objects.filter(is_public__exact=True)
        serializer = PostSerializer(queryset, many=True)
        return Response(serializer.data)

    @action(methods=['get'], detail=True, permission_classes=[AllowAny])
    def public_detail(self, request, pk=None):
        queryset = Post.objects.filter(is_public__exact=True)
        post = get_object_or_404(queryset, pk=pk)
        serializer = PostSerializer(post)
        return Response(serializer.data)



