import { CommentCount, PostMetaInfo } from '@components/common/meta';
import { RightButtonModal } from '@components/common/modal';
import styled from '@emotion/styled';
import Image from 'next/image';
import { useState } from 'react';
import ButtonGroup from '../../common/buttongroup';

const WriteComment = styled.form`
  padding-left: 20px;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  textarea {
    width: calc(100% - 50px);
    padding: 2% 5% 10% 2%;
    border-color: ${({ theme }) => theme.lineGray};
    resize: none;
  }
  button {
    width: 50px;
    height: 30px;
    margin: 10px 20px;
    background-color: ${({ theme }) => theme.purple};
    color: white;
    border: none;
    align-self: flex-end;
    cursor: pointer;
  }
`;

const CommentContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  .updateComment {
    position: fixed;
    top: 30%;
    left: 50%;
    transform: translateX(-50%);
    background-color: white;
    width: 300px;
    height: 300px;
    overflow: hidden;
    text-align: center;
    border-radius: 15px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.6);

    h4 {
      padding: 5%;
      font-size: 14px;
      font-weight: bold;
      border-bottom: 1px solid ${({ theme }) => theme.lightGray};
      margin-bottom: 15px;
    }
    textarea {
      line-height: 1.4;
      padding: 2%;
      resize: none;
      width: 80%;
      height: 150px;
    }
    div {
      position: absolute;
      width: 100%;
      bottom: 0;
      display: flex;
    }
    button {
      border: none;
      width: 50%;
      height: 45px;
      &:nth-of-type(1) {
        background-color: #f6f6f6;
        color: ${({ theme }) => theme.purple};
      }
      &:nth-of-type(2) {
        background-color: ${({ theme }) => theme.purple};
        color: white;
      }
    }
  }
`;

const CommenGroup = styled.div`
  padding-bottom: 20px;
  div[role~='none'] {
    margin-top: 5%;
    border-top: 1px solid ${({ theme }) => theme.lineGray};
  }

  h3 {
    margin-left: 20px;
    font-weight: bold;
    padding: 5% 0;
  }
`;

const ImageContainer = styled.div`
  margin-left: 20px;
`;

const Commentor = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px 10px;
  margin: 3% 0;

  div:nth-of-type(2) {
    align-items: center;
  }

  p {
    margin-left: 20px;
    line-height: 1.3;
    padding-bottom: 1%;
  }
  &[class~='myComment'] {
    background-color: ${({ theme }) => theme.lightPurple};
    padding-bottom: 20px;

    div:nth-of-type(n + 2) {
      width: 30%;
    }
    button {
      line-height: 1.6;
    }
  }
`;

const Comments = () => {
  const userId = '밍망디';
  const comments = [
    {
      id: '1',
      communityId: 'ZuDYupb7g2UYVDfSKOIH',
      content: '염분기 없는 닭가슴살이면 ㄱㅊ',
      creationDate: '2022-07-03T00:00:10.792Z',
      userId: '그만먹고싶닭',
    },
    {
      id: '2',
      communityId: 'ZuDYupb7g2UYVDfSKOIH',
      content: '감사합니다!',
      creationDate: '2022-07-03T02:00:10.792Z',
      userId: '밍망디',
    },
    {
      id: '3',
      communityId: 'ZuDYupb7g2UYVDfSKOIH',
      content: '한번 선물했더니 그 다음부턴 헬스장에서 마주칠 때마다 인사해 주더라고요!',
      creationDate: '2022-07-03T06:36:10.792Z',
      userId: '상여자',
    },
    {
      id: '4',
      communityId: 'ZuDYupb7g2UYVDfSKOIH',
      content: '답글 남겨 주신 모든 분들 감사합니다!',
      creationDate: '2022-07-03T06:37:10.792Z',
      userId: '밍망디',
    },
  ];

  return (
    <CommenGroup>
      <div role="none"></div>
      <h3>댓글</h3>
      {comments.map((comment, index) => (
        <Commentor className={userId === comment.userId ? 'myComment' : ''} key={index}>
          <ImageContainer>
            <Image
              className="profile"
              src="/assets/common/profile.svg"
              alt="프로필"
              width="30"
              height="30"
            />
          </ImageContainer>
          <PostMetaInfo
            nickname={comment.userId}
            dateTime={new Date(comment.creationDate)}
            className="comment"
          ></PostMetaInfo>
          {userId === comment.userId ? <ButtonGroup className="comment" /> : ''}
          <p>{comment.content}</p>
        </Commentor>
      ))}

      <CommentContainer>
        <div className="updateComment">
          <h4>댓글 수정</h4>
          <textarea placeholder="한번 선물했더니 그 다음부턴 헬스장에서 마주칠 때마다 인사해 주더라고요!" />
          <div className="buttonGroup">
            <button>취소</button>
            <button>작성 완료</button>
          </div>
        </div>
      </CommentContainer>

      <WriteComment>
        <textarea placeholder="댓글을 작성하세요" />
      </WriteComment>
    </CommenGroup>
  );
};

export default Comments;
