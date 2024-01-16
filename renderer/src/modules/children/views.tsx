import React from 'react';

import { LoadingIcon, PlusIcon } from '@/assets';
import { getFormattedDate } from '@/utils';
import { Modal, Input, Button, Table } from '@/components';

import { ChildrenViewsProps } from './types';
import {
  sChildren,
  sChildrenHeading,
  sChildrenLoading,
  sChildrenTableLeft,
  sChildrenModalButton,
  sChildrenAddButton,
  sChildrenDeleteButton,
  sChildrenTableButton,
  sChildrenAddIcon,
  sChildrenContent,
  sContentWrapper,
} from './styles';
import PageTitle from '@/components/pagetitle';
import { useTablePaging } from '@/components/table/paging/hooks';
import Paging from '@/components/table/paging';
import { sPagingSection } from '../log-activity/styles';

const ChildrenViews = ({
  formData,
  isLoading,
  isAddModalOpen,
  isEditModalOpen,
  isDeleteModalOpen,
  isFormLoading,
  listOfChildren,
  openAddModalHandler,
  closeAddModalHandler,
  openEditModalHandler,
  closeEditModalHandler,
  openDeleteModalHandler,
  closeDeleteModalHandler,
  formAddOnSubmitHandler,
  formEditOnSubmitHandler,
  formDeleteOnSubmitHandler,
  inputAddOnChangeHandler,
  inputEditOnChangeHandler,
  inputDeleteOnChangeHandler,
}: ChildrenViewsProps) => {
  const tablePaging = useTablePaging({
    data: listOfChildren,
    itemsPerPage: 10,
    maxPageNumber: 5,
  });
  return (
    <>
      <Modal
        size="small"
        title="Tambah Data Anak Baru"
        isOpen={isAddModalOpen}
        onClose={closeAddModalHandler}
      >
        <form onSubmit={formAddOnSubmitHandler}>
          <Input
            name="name"
            type="text"
            label="Name"
            value={formData.name}
            disabled={isFormLoading}
            onChange={inputAddOnChangeHandler}
          />
          <div className={sChildrenModalButton}>
            <Button variant="tertiary" onClick={closeAddModalHandler} fullWidth>
              Batal
            </Button>
            <Button type="submit" fullWidth>
              Tambahkan
            </Button>
          </div>
        </form>
      </Modal>
      <Modal
        size="small"
        title="Edit Data Anak Baru"
        isOpen={isEditModalOpen}
        onClose={closeEditModalHandler}
      >
        <form onSubmit={formEditOnSubmitHandler}>
          <Input
            name="name"
            type="text"
            label="Name"
            value={formData.name}
            disabled={isFormLoading}
            onChange={inputEditOnChangeHandler}
          />
          <div className={sChildrenModalButton}>
            <Button
              variant="tertiary"
              onClick={closeEditModalHandler}
              fullWidth
            >
              Batal
            </Button>
            <Button type="submit" fullWidth>
              Edit
            </Button>
          </div>
        </form>
      </Modal>
      <Modal
        size="small"
        title="Yakin untuk menghapus?"
        isOpen={isDeleteModalOpen}
        onClose={closeDeleteModalHandler}
        isDeleteType={true}
        name={formData.name ? formData.name : ''}
      >
        <form onSubmit={formDeleteOnSubmitHandler}>
          <div className={sChildrenModalButton}>
            <Button
              variant="tertiary"
              onClick={closeDeleteModalHandler}
              className={sChildrenDeleteButton}
            >
              Batal
            </Button>
            <Button type="submit" className={sChildrenDeleteButton}>
              Ya
            </Button>
          </div>
        </form>
      </Modal>
      <div className={sChildren}>
        <div className={sChildrenHeading}>
          <div className={sChildrenAddButton}>
            <Button onClick={openAddModalHandler}>
              <span className={sChildrenAddIcon}>
                <PlusIcon />
              </span>
              Tambah Data Anak
            </Button>
          </div>
        </div>
        <div>
          {isLoading ? (
            <div className={sChildrenLoading}>
              <LoadingIcon size="s" />
            </div>
          ) : (
            <div className={sContentWrapper}>
              <div className={sChildrenContent}>
                <Table>
                  <thead>
                    <tr>
                      <th>No</th>
                      <th style={{width: '100%'}}>Nama Anak</th>
                      <th>Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {listOfChildren.map((item, index) => {
                      return (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td className={sChildrenTableLeft}>{item.name}</td>
                          <td className={sChildrenTableButton}>
                            <Button
                              type="submit"
                              onClick={() =>
                                openEditModalHandler(item.id, item.name)
                              }
                            >
                              {' '}
                              Edit{' '}
                            </Button>
                            <Button
                              type="submit"
                              variant="danger"
                              onClick={() =>
                                openDeleteModalHandler(item.id, item.name)
                              }
                            >
                              {' '}
                              Hapus{' '}
                            </Button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </div>
              {/* <div className={sPagingSection}>
                <Paging tablePaging={tablePaging} />
              </div> */}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ChildrenViews;
