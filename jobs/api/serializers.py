from rest_framework import serializers
from jobs.models import JobOffer

"""
serializers.ModelSerializer
    モデルのフィールドに基づいて自動的にシリアライザを生成する。今回はこれを継承している。
    メリット
        ・シリアライザの自動生成
        ・CRUD操作（POST,GET,PUT/PATCH/DELETE）を簡単に実装できる
        ・自動でモデルに定義されたバリデーションを行う
        ・Metaクラスを使って、どのモデルとどのフィールドを使うかを指定できる
"""
class JobOfferSerializer(serializers.ModelSerializer):
    """
    Metaは、このシリアライザがどのモデルとどのフィールドを使うかを指定。
    """
    class Meta:
        model = JobOffer
        fields = '__all__'