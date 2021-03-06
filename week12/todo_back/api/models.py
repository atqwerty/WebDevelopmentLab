from django.db import models

# Create your models here.

class TaskList(models.Model):
    name = models.CharField(max_length = 200)

class Task(models.Model):
    name = models.CharField(max_length = 200)
    # created_at = models.DateTimeField('date created at')
    # due_on = models.DateTimeField('date due on')
    created_at = models.CharField(max_length = 200)
    due_on = models.CharField(max_length = 200)
    status = models.CharField(max_length = 200)
    task_list = models.ForeignKey(TaskList, on_delete=models.CASCADE)