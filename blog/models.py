from django.db import models

class Post(models.Model):
    author = models.ForeignKey('auth.User', related_name='post', on_delete=models.CASCADE)
    title = models.CharField(max_length=100)
    body = models.TextField()
    is_public = models.BooleanField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title
