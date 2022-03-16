FROM python:3.9

ENV PYTHONUNBUFFERED 1

WORKDIR /exam_app
ADD ./exam/requirenments.txt /exam_app/backend/

RUN python -m pip install --upgrade pip && \
    pip install -r backend/requirenments.txt

ADD ./docker /exam_app/docker
ADD ./exam /exam_app/backend
ADD ./frontend/test_list/build /exam_app/frontend/build
