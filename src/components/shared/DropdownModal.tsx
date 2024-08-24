import { FC, useCallback, useEffect, useRef, useState } from "react";
import { mergeStyles } from "../../utils";
import { IconDropdownDown } from "../../constants";
type TDropdownModal = {
  contents: string[];
  images: string[];
  contentImageWidth?: string;
  contentImageHeight?: string;
  style?: string;
  selected?: string;
  onClick: (selection: string) => void;
};
export const DropdownModal: FC<TDropdownModal> = ({
  contents,
  images,
  style = "",
  onClick,
  contentImageWidth = "12",
  contentImageHeight = "12",
  selected = contents[0],
}) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const getSelectedImage = useCallback(() => {
    const index = contents.findIndex((content) => {
      return content === selected;
    });
    return images[index];
  }, [selected, images, contents]);

  const modalRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const handleOutsideClickListener = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setShowModal(false);
      }
    };
    document.addEventListener("mouseup", handleOutsideClickListener);
    return () =>
      document.removeEventListener("click", handleOutsideClickListener);
  });
  return (
    <div className="relative">
      <div
        className="flex 
        items-center 
        justify-center 
        gap-x-1 
        w-[100px]
        hover:cursor-pointer
        "
        onClick={() => setShowModal(!showModal)}
      >
        <img
          src={getSelectedImage()}
          width={12}
          height={12}
          alt="Content Image"
        />
        <p>{selected}</p>
        <img
          src={IconDropdownDown}
          width={12}
          height={12}
          alt="Dropdown Image"
        />
      </div>
      {showModal && (
        <div
          className={mergeStyles(
            style,
            `flex
            flex-col
            gap-y-2   
            absolute
            left-20
            w-[150px]
            h-[100px]
            px-4
            py-2
            bg-neutral-200
            rounded-xl
            shadow-dark-sm
            `,
          )}
          ref={modalRef}
        >
          {contents.map((content, index) => {
            return (
              <div
                className="flex 
                    hover:cursor-pointer
                    items-center 
                    text-start
                    gap-x-2"
                onClick={async () => {
                  onClick(content);
                  setShowModal(false);
                }}
              >
                <img
                  src={images[index]}
                  width={contentImageWidth}
                  height={contentImageHeight}
                />
                <p>{content}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
