from rest_framework import generics
from jobs.models import JobOffer
from jobs.api.serializers import JobOfferSerializer

"""
ListCreateAPIView
    ・GETとPOSTのリクエストを処理する
    ・リストの取得と新規作成を行う
    ・一覧表示と新規作成を行う場合に使用する
"""
class ListView(generics.ListCreateAPIView):
    queryset = JobOffer.objects.all().order_by("-id")
    serializer_class = JobOfferSerializer
    
"""
RetrieveUpdateDestroyAPIView
    ・GET、PUT、PATCH、DELETEのリクエストを処理する
    ・詳細表示、更新、削除を行う
    ・詳細表示、更新、削除を行う場合に使用する
"""
class DetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = JobOffer.objects.all()
    serializer_class = JobOfferSerializer