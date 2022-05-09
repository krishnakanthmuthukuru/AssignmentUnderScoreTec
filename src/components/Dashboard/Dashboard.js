import React, { useMemo, useState } from "react";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { useQuery, QueryClient } from "react-query";
import fetchPhotos from "../../api/fetchPhotos";
import { Button, PageNumber, Pagination, PhotosContainer, Image } from "./Dashboard.styles";

const Dashboard = () => {
  const queryClient = new QueryClient();
  const [page, setPage] = useState(1);
  const pageLimit = 20;
  const { status, data, error, isFetching, isPreviousData } = useQuery(
    ["paginatedPhotos", page],
    () => fetchPhotos(page, pageLimit),
    {
      keepPreviousData: true,
      staleTime: 5000,
    }
  );
  useMemo(() => {
    queryClient.prefetchQuery(["paginatedPhotos", page + 1], () =>
      fetchPhotos(page + 1, pageLimit)
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, page, queryClient]);

  return (
    <div>
      {status === "loading" ? (
        <div>Loading...</div>
      ) : status === "error" ? (
        <div>Error: {error.message}</div>
      ) : (
        // `data` will either resolve to the latest page's data
        // or if fetching a new page, the last successful page's data
        <PhotosContainer>
          {data?.map((photo) => (
            <Image
              alt={photo.thumbnailUrl}
              src={photo.url}
              key={photo.id}
            />
          ))}
        </PhotosContainer>
      )}
      <Pagination>
        <Button
          onClick={() => setPage((old) => Math.max(old - 1, 0))}
          disabled={page === 1}
        >
          <AiFillCaretLeft />
        </Button>
        <PageNumber>{page}</PageNumber>
        <Button
          onClick={() => {
            setPage((old) => old + 1);
          }}
          disabled={isPreviousData}
        >
          <AiFillCaretRight />
        </Button>
      </Pagination>
      {
        // Since the last page's data potentially sticks around between page requests,
        // we can use `isFetching` to show a background loading
        // indicator since our `status === 'loading'` state won't be triggered
        isFetching ? <span> Loading...</span> : null
      }{" "}
    </div>
  );
};

export default Dashboard;
