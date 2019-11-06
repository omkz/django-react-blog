from django.db import models

class Post(models.Model):
    title = models.CharField(max_length=100)
    body = models.TextField()
    is_public = models.BooleanField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
