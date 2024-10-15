from django.db import models

# Create your models here.
class JobOffer(models.Model):
    company_name = models.CharField(max_length=100)
    company_email = models.EmailField()
    job_title = models.CharField(max_length=100)
    job_description = models.TextField()
    job_salary = models.PositiveIntegerField()
    job_prefectures = models.CharField(max_length=100)
    job_city = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
    
    """
    オブジェクトを呼び出す際に、company_nameを返すようにする
    ex) JobOffer.objects.all()[0] => 'google'
    """
    def __str__(self):
        return self.company_name