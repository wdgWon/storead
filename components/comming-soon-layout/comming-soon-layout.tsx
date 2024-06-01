"use client";

export default function CommingSoonLayout() {
  return (
    <div className="container">
      <h1 className="title">Coming Soon</h1>
      <p className="description">
        우리의 새로운 웹사이트가 곧 공개될 예정입니다. <br />
        잠시만 기다려주세요!
      </p>

      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background-color: #f5f5f5;
        }

        .title {
          font-size: 3rem;
          font-weight: bold;
          color: #333;
          margin-bottom: 1rem;
        }

        .description {
          font-size: 1.2rem;
          color: #666;
          margin-bottom: 2rem;
          text-align: center;
        }

        .coming-soon-image {
          max-width: 300px;
          margin-bottom: 2rem;
        }
      `}</style>
    </div>
  );
}
